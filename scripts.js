$(document).ready(function() {
    $('.card button').on('click', function() {
        $('#curiosidadeText').text($(this).closest('.card').data('questao'));
    });

    $('#quizModal').on('show.bs.modal', function(event) {
        const instrumento = $(event.relatedTarget).data('instrumento');
        const perguntas = {
            'Marcos Biancardini': 'Qual é a música mais famosa do Marcos Biancardini?',
            'Renato Andrade': 'Qual é a música mais famosa do Renato Andrade?',
            'Almir Sater': 'Qual é a música mais famosa do Almir Sater?'
        };
        $('#quizQuestion').text(perguntas[instrumento]);
        $(this).data('correctAnswer', getCorrectAnswer(instrumento));
    });

    function getCorrectAnswer(instrumento) {
        const respostas = {
            'Marcos Biancardini': 'trem do pantanal',
            'Renato Andrade': 'o caderno',
            'Almir Sater': 'tocando em frente'
        };
        return respostas[instrumento];
    }

    $('#submitQuiz').on('click', function() {
        const answer = $('#quizAnswer').val().toLowerCase();
        const correctAnswer = $('#quizModal').data('correctAnswer').toLowerCase();
        alert(answer === correctAnswer ? "Certo! Boa resposta!" : "Errado! Tente novamente.");
        $('#quizModal').modal('hide');
    });

    $('#sairButton').on('click', function() {
        $('#confirmacaoModal').modal('show');
    });

    $('#confirmarSair').on('click', function() {
        alert('Obrigado pela visita! Esperamos vê-lo novamente.');
        $('#confirmacaoModal').modal('hide');
    });
});

