import { render, screen } from '@testing-library/react';
import App from './App';
import Notifications from './Notifications';

describe('Test for App component', () => {
    it('Checks for App-header div', () => {
        render(<App/>)
        const AppHeader = screen.getByTestId('App-header');
        expect(AppHeader).toBeInTheDocument()
    });
    it('Checks for App-footer div', () => {
        render(<App/>)
        const Appfooter = screen.getByTestId('App-footer');
        expect(Appfooter).toBeInTheDocument()
    });
    it('Checks for App-body div', () => {
        render(<App/>);
        const AppBody = screen.getByTestId('App-body');
        expect(AppBody).toBeInTheDocument()
    });
});

describe('Checks for Notification Component', () => {
    it('Checks if three li elements are rendered', () => {
        render(<Notifications />);
        const liItems = screen.getAllByRole('listitem');
        expect(liItems).toHaveLength(3);
    });

    it('Checks for paragraph text is rendered', () => {
        render(<Notifications />);
        const text = screen.getByText('Here is the list of notifications');
        expect(text).toBeInTheDocument();
    })
})