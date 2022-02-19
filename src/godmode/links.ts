export default [
    {
        path: '/',
        title: 'Root',
    },
    {
        path: '/auth/signup/agency',
        title: 'Cadastro agência (vantagens)',
    },
    {
        path: '/auth/signup/agency/new',
        title: 'Cadastro agência (formulário)',
    },
    {
        path: '/auth/login/tomador',
        title: 'Login tomador',
    },
    {
        path: '/auth/login/agencia',
        title: 'Login agência',
    },
].map((item, index) => ({id: index, ...item}))