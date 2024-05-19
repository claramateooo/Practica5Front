const Botones = () => {
    const handleVolver = () => {
        window.location.href = '/';
    };

    return (
        <button className="custom-class" onClick={handleVolver}>
            Volver
        </button>
    );
};

export default Botones;
