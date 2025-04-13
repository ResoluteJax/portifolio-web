import React, { useState, useRef } from 'react'; // 1. Importa useState e useRef
import emailjs from 'emailjs-com'; // 2. Importa emailjs
import '../../assets/css/Contact.css';

const Contact = React.forwardRef((props, ref) => {
  // 3. Referência para o elemento <form>
  const form = useRef();

  // 4. Estados para feedback e controle de envio
  const [isSending, setIsSending] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState({ type: '', text: '' }); // type: 'success' ou 'error'

  // 5. Função para enviar o email
  const sendEmail = (event) => {
    event.preventDefault(); // Previne recarregar a página

    // Validação básica (opcional, mas boa ideia)
    if (!form.current.user_name.value || !form.current.user_email.value || !form.current.message.value) {
        setFeedbackMessage({ type: 'error', text: 'Por favor, preencha todos os campos obrigatórios.' });
        return;
    }

    setIsSending(true); // Ativa estado "enviando"
    setFeedbackMessage({ type: '', text: '' }); // Limpa feedback anterior

    // Pega os IDs do .env - IMPORTANTE: Reinicie o servidor (npm start) após criar/modificar .env
    const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const userID = process.env.REACT_APP_EMAILJS_USER_ID;

     // Verificação se as variáveis de ambiente foram carregadas
     if (!serviceID || !templateID || !userID) {
        console.error("EmailJS IDs não encontrados nas variáveis de ambiente! Verifique o arquivo .env e reinicie o servidor.");
        setFeedbackMessage({ type: 'error', text: 'Erro na configuração do envio. Tente novamente mais tarde.' });
        setIsSending(false);
        return;
    }

    // Envia o formulário usando EmailJS
    emailjs.sendForm(serviceID, templateID, form.current, userID)
      .then((result) => {
          console.log('EmailJS SUCCESS!', result.text);
          setFeedbackMessage({ type: 'success', text: 'Mensagem enviada com sucesso! Se você fez alguma pergunta, aguarde que eu te respondo o quanto antes. Obrigado. ' });
          setIsSending(false); // Desativa "enviando"
          form.current.reset(); // Limpa os campos do formulário
      }, (error) => {
          console.error('EmailJS FAILED...', error.text);
          setFeedbackMessage({ type: 'error', text: `Falha ao enviar a mensagem: ${error.text}. Tente novamente.` });
          setIsSending(false); // Desativa "enviando"
      });
  };

  return (
    <section ref={ref} id="contact" className="contact-section">
      <h2>Entre em Contato</h2>
      <p className="contact-intro">
        Tem alguma pergunta, proposta ou apenas quer dizer um "oi"? Preencha o formulário abaixo!
      </p>

      {/* 6. Adiciona ref={form} e muda onSubmit para sendEmail */}
      <form ref={form} className="contact-form" onSubmit={sendEmail}>
        <div className="form-group">
          <label htmlFor="user_name">Nome:</label>
          <input
            type="text"
            id="user_name"
            name="user_name"
            required
            placeholder="Seu nome completo"
            disabled={isSending} // Desativa enquanto envia
          />
        </div>

        <div className="form-group">
          <label htmlFor="user_email">Email:</label>
          <input
            type="email"
            id="user_email"
            name="user_email"
            required
            placeholder="seu_email@exemplo.com"
            disabled={isSending} // Desativa enquanto envia
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Mensagem:</label>
          <textarea
            id="message"
            name="message"
            rows="6"
            required
            placeholder="Digite sua mensagem aqui..."
            disabled={isSending} // Desativa enquanto envia
          ></textarea>
        </div>

        {/* 7. Atualiza botão para mostrar estado de envio */}
        <button type="submit" className="submit-button" disabled={isSending}>
          {isSending ? 'Enviando...' : 'Enviar Mensagem'}
        </button>

        {/* 8. Mostra a mensagem de feedback */}
        {feedbackMessage.text && (
          <div className={`form-feedback ${feedbackMessage.type}`}>
            {feedbackMessage.text}
          </div>
        )}
      </form>
    </section>
  );
});

export default Contact;