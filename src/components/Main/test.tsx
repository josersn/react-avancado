import { render, screen } from '@testing-library/react';

import Main from './index';
//descrevo o que quero testar
describe('<Main />', () => {
    // o que testar
    it('Should render the heading', () => {
        // renderizo um componente
        const { container } = render(<Main />);
        // oque espero desse teste
        expect(
            screen.getByRole('heading', { name: /react avançado/i })
        ).toBeInTheDocument();

        expect(container.firstChild).toMatchSnapshot();
    });
});
