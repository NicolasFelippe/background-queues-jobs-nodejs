import Mail from '../lib/Mail'

export default {
    key: 'RegistrationMail',
    async handle({ data }) {
        const { user } = data;
        
        await Mail.sendMail({
            from: 'Queue Teste <queue@queueteste.com.br>',
            to: `${user.name} <${user.email}>`,
            subject: 'Cadastro de usuário',
            html: `Olá, ${user.name}, bem-vindo ao sistema de filas by Nicolas Felippe :D`
        })
    }
}