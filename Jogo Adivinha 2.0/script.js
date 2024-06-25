document.addEventListener('DOMContentLoaded', () => {
    const menuSection = document.getElementById('Menu');
    const gameSection = document.getElementById('paginaJogo');
    const resultSection = document.getElementById('resultadoPagina');
    const novaFeedbackSection = document.getElementById('novaPaginaFeedback');
    const nameForm = document.getElementById('Informacoes');
    const welcomeMessage = document.getElementById('bemvindoID');
    const maxNumberSpan = document.getElementById('numeroMaximo');
    const guessInput = document.getElementById('NumAle');
    const submitGuessButton = document.getElementById('enviarPalpite');
    const feedback = document.getElementById('feedback');
    const resultMessage = document.getElementById('resultadoMensagemID');
    const finalScore = document.getElementById('pontosID');
    const playAgainButtonJogo = document.getElementById('JogarNovaJogoID');
    const playAgainButtonResultado = document.getElementById('JogarNovaResultadoID');
    const enviarFeedbackAposJogoButton = document.getElementById('EnviarFeedbackAposJogo');
    const feedbackForm = document.getElementById('novoFeedbackForm');
    const emailNovaPagina = document.getElementById('emailNovaPagina');
    const assuntoNovaPagina = document.getElementById('assuntoNovaPagina');
    const voltarMenuBtn = document.getElementById('voltarMenuBtn'); // Botão de voltar adicionado

    let maxNumber = 10;
    let randomNumber;
    let attempts = 0;

    maxNumberSpan.textContent = maxNumber;

    gameSection.style.display = 'none';
    resultSection.style.display = 'none';
    novaFeedbackSection.style.display = 'none';

    let playerName = '';

    const playButton = document.getElementById('jogarBotao');
    playButton.addEventListener('click', () => {
        startGameProcess();
    });

    nameForm.addEventListener('submit', (event) => {
        event.preventDefault();
        startGameProcess();
    });

    function startGameProcess() {
        playerName = document.getElementById('nomeID').value;
        if (playerName) {
            welcomeMessage.textContent = Bem-vindo, ${playerName}!;
            menuSection.style.display = 'none';
            gameSection.style.display = 'block';
            startGame();
        } else {
            alert('Por favor, insira seu nome.');
        }
    }

    document.getElementById('nomeID').focus();

    submitGuessButton.addEventListener('click', () => {
        const guess = parseInt(guessInput.value, 10);
        if (isNaN(guess) || guess < 1 || guess > maxNumber) {
            feedback.textContent = Por favor, insira um número válido entre 1 e ${maxNumber}!;
            return;
        }
        attempts++;

        if (guess === randomNumber) {
            showResult(true);
        } else {
            if (Math.abs(guess - randomNumber) <= 2) {
                feedback.style.color = 'red';
                feedback.textContent = 'Está Quente!';
            } else if (Math.abs(guess - randomNumber) <= 5) {
                feedback.style.color = 'orange';
                feedback.textContent = 'Está Morno';
            } else {
                feedback.style.color = 'blue';
                feedback.textContent = 'Está Frio';
            }
        }
    });

    playAgainButtonJogo.addEventListener('click', resetGame);
    playAgainButtonResultado.addEventListener('click', resetGame);

    enviarFeedbackAposJogoButton.addEventListener('click', () => {
        novaFeedbackSection.style.display = 'block';
        resultSection.style.display = 'none';
    });

    feedbackForm.addEventListener('submit', (event) => {
        const emailValue = emailNovaPagina.value;
        const feedbackValue = assuntoNovaPagina.value;
        if (!emailValue || !feedbackValue) {
            event.preventDefault();
            alert("Por favor, preencha todos os campos.");
        }
    });

    // Função para voltar ao menu ou outra parte do jogo desejada
    voltarMenuBtn.addEventListener('click', () => {
        menuSection.style.display = 'block';
        novaFeedbackSection.style.display = 'none';
    });

    function startGame() {
        randomNumber = Math.floor(Math.random() * maxNumber) + 1;
        attempts = 0;
        feedback.textContent = '';
        guessInput.value = '';
    }

    function showResult(success) {
        gameSection.style.display = 'none';
        resultSection.style.display = 'block';
        if (success) {
            resultMessage.textContent = Parabéns, ${playerName}! Você acertou em ${attempts} tentativas!;
            finalScore.textContent = Você adivinhou o número ${randomNumber}.;
        }
    }

    function resetGame() {
        menuSection.style.display = 'block';
        gameSection.style.display = 'none';
        resultSection.style.display = 'none';
        novaFeedbackSection.style.display = 'none';
        nameForm.reset();
    }

    const themeToggle = document.getElementById('themeToggle');
    themeToggle.addEventListener('change', () => {
        document.body.classList.toggle('dark-theme');
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const menuSection = document.getElementById('Menu');
    const gameSection = document.getElementById('paginaJogo');
    const resultSection = document.getElementById('resultadoPagina');
    const novaFeedbackSection = document.getElementById('novaPaginaFeedback');
    const nameForm = document.getElementById('Informacoes');
    const welcomeMessage = document.getElementById('bemvindoID');
    const maxNumberSpan = document.getElementById('numeroMaximo');
    const guessInput = document.getElementById('NumAle');
    const submitGuessButton = document.getElementById('enviarPalpite');
    const feedback = document.getElementById('feedback');
    const resultMessage = document.getElementById('resultadoMensagemID');
    const finalScore = document.getElementById('pontosID');
    const playAgainButtonJogo = document.getElementById('JogarNovaJogoID');
    const playAgainButtonResultado = document.getElementById('JogarNovaResultadoID');
    const enviarFeedbackAposJogoButton = document.getElementById('EnviarFeedbackAposJogo');
    const feedbackForm = document.getElementById('novoFeedbackForm');
    const emailNovaPagina = document.getElementById('emailNovaPagina');
    const assuntoNovaPagina = document.getElementById('assuntoNovaPagina');
    const voltarMenuBtn = document.getElementById('voltarMenuBtn'); // Botão de voltar adicionado

    let maxNumber = 10;
    let randomNumber;
    let attempts = 0;

    maxNumberSpan.textContent = maxNumber;

    gameSection.style.display = 'none';
    resultSection.style.display = 'none';
    novaFeedbackSection.style.display = 'none';

    let playerName = '';

    const playButton = document.getElementById('jogarBotao');
    playButton.addEventListener('click', () => {
        startGameProcess();
    });

    nameForm.addEventListener('submit', (event) => {
        event.preventDefault();
        startGameProcess();
    });

    function startGameProcess() {
        playerName = document.getElementById('nomeID').value;
        if (playerName) {
            welcomeMessage.textContent = Bem-vindo, ${playerName}!;
            menuSection.style.display = 'none';
            gameSection.style.display = 'block';
            startGame();
        } else {
            alert('Por favor, insira seu nome.');
        }
    }

    document.getElementById('nomeID').focus();

    submitGuessButton.addEventListener('click', () => {
        const guess = parseInt(guessInput.value, 10);
        if (isNaN(guess) || guess < 1 || guess > maxNumber) {
            feedback.textContent = Por favor, insira um número válido entre 1 e ${maxNumber}!;
            return;
        }
        attempts++;

        if (guess === randomNumber) {
            showResult(true);
        } else {
            if (Math.abs(guess - randomNumber) <= 2) {
                feedback.style.color = 'red';
                feedback.textContent = 'Está Quente!';
            } else if (Math.abs(guess - randomNumber) <= 5) {
                feedback.style.color = 'orange';
                feedback.textContent = 'Está Morno';
            } else {
                feedback.style.color = 'blue';
                feedback.textContent = 'Está Frio';
            }
        }
    });

    playAgainButtonJogo.addEventListener('click', resetGame);
    playAgainButtonResultado.addEventListener('click', resetGame);

    enviarFeedbackAposJogoButton.addEventListener('click', () => {
        novaFeedbackSection.style.display = 'block';
        resultSection.style.display = 'none';
    });

    feedbackForm.addEventListener('submit', (event) => {
        const emailValue = emailNovaPagina.value;
        const feedbackValue = assuntoNovaPagina.value;
        if (!emailValue || !feedbackValue) {
            event.preventDefault();
            alert("Por favor, preencha todos os campos.");
        }
    });

    // Função para voltar ao menu ou outra parte do jogo desejada
    voltarMenuBtn.addEventListener('click', () => {
        menuSection.style.display = 'block';
        novaFeedbackSection.style.display = 'none';
    });

    function startGame() {
        randomNumber = Math.floor(Math.random() * maxNumber) + 1;
        attempts = 0;
        feedback.textContent = '';
        guessInput.value = '';
    }

    function showResult(success) {
        gameSection.style.display = 'none';
        resultSection.style.display = 'block';
        if (success) {
            resultMessage.textContent = Parabéns, ${playerName}! Você acertou em ${attempts} tentativas!;
            finalScore.textContent = Você adivinhou o número ${randomNumber}.;
        }
    }

    function resetGame() {
        menuSection.style.display = 'block';
        gameSection.style.display = 'none';
        resultSection.style.display = 'none';
        novaFeedbackSection.style.display = 'none';
        nameForm.reset();
    }

    const themeToggle = document.getElementById('themeToggle');
    themeToggle.addEventListener('change', () => {
        document.body.classList.toggle('dark-theme');
    });
});