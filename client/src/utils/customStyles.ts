export const customStyles = {
    control: (provided: any, state: any) => ({
        ...provided,
        borderColor: state.isFocused ? '#e91e63' : '#ccc', // Cambiar color del borde al estar enfocado
        boxShadow: state.isFocused ? '0 0 0 1px #e91e63' : 'none', // Eliminar el box-shadow por defecto
        '&:hover': {
            borderColor: state.isFocused ? '#e91e63' : '#aaa', // Cambiar color al pasar el mouse
        }
    }),
    option: (provided: any, state: any) => ({
        ...provided,
        backgroundColor: state.isSelected
            ? 'var(--main-color-dark)' // Color cuando la opción está seleccionada
            : state.isFocused
                ? 'var(--secondary-color)' // Color cuando la opción está enfocada
                : null,
        color: state.isSelected ? 'white' : 'black', // Color del texto
        ':active': {
            backgroundColor: state.isSelected ? 'var(--main-color-dark)' : 'var(--main-color)', // Color cuando la opción es cliqueada
        },
    }),
};
