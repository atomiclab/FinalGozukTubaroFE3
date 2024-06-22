import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import Form from '../Components/Form';

describe('Form Component', () => {
  test('renders the form with initial empty inputs', () => {
    render(<Form/>);

    const nameInput = screen.getByPlaceholderText('Tu nombre');
    const emailInput = screen.getByPlaceholderText('tu@mail.com');
    const textBox = screen.getByPlaceholderText('Deja tu consulta acá');
    const submitButton = screen.getByText('Enviar consulta');

    expect(nameInput.value).toBe('');
    expect(emailInput.value).toBe('');
    expect(textBox.value).toBe('');
    expect(submitButton).toBeInTheDocument();
  });

  test('shows error message when name is less than 3 characters', () => {
    render(<Form />);

    const nameInput = screen.getByPlaceholderText('Tu nombre');
    const emailInput = screen.getByPlaceholderText('tu@mail.com');
    const submitButton = screen.getByText('Enviar consulta');

    fireEvent.change(nameInput, { target: { value: 'AL' } });
    fireEvent.change(emailInput, { target: { value: 'alexia@gmail.com' } });
    fireEvent.click(submitButton);

    const errorMessage = screen.getByText('Hubo un error tu nombre(Nombre mayor a 5 caracteres)!');

    expect(errorMessage).toBeInTheDocument();
  });

  test('shows error message when email is invalid', () => {
    render(<Form />);

    const nameInput = screen.getByPlaceholderText('Tu nombre');
    const emailInput = screen.getByPlaceholderText('tu@mail.com');
    const submitButton = screen.getByText('Enviar consulta');

    fireEvent.change(nameInput, { target: { value: 'Alex' } });
    fireEvent.change(emailInput, { target: { value: 'alexinarroba.com' } });
    fireEvent.click(submitButton);

    const errorMessage = screen.getByText('Hubo un error con tu mail!');

    expect(errorMessage).toBeInTheDocument();
  });

  
});