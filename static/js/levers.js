document.addEventListener('DOMContentLoaded', function() {
    const inflationCheckboxes = document.querySelectorAll('.inflation-lever');
    const marketingCheckboxes = document.querySelectorAll('.marketing-lever');
    const rdCheckboxes = document.querySelectorAll('.rd-lever');

    function handleCheckboxes(checkboxes, messageElement, levers, error) {
        checkboxes.forEach(checkbox => {
            checkbox.addEventListener('change', function() {
                const checkedCheckboxes = Array.from(checkboxes).filter(cb => cb.checked);
                const checkedCount = checkedCheckboxes.length;

                if (checkedCount >= levers) {
                    checkboxes.forEach(otherCheckbox => {
                        if (!otherCheckbox.checked) {
                            otherCheckbox.disabled = true;
                        }
                    });
                } else {
                    checkboxes.forEach(otherCheckbox => {
                        otherCheckbox.disabled = false;
                    });
                }

                if (checkedCount !== levers) {
                    if (levers === 1) {
                        messageElement.textContent = `Please select ${levers} lever`;
                    } else {
                        messageElement.textContent = `Please select ${levers} levers`;
                    }
                    error = true;
                } else {
                    messageElement.textContent = '';
                    error = false;
                }
            });
        });
    }

    const inflationMessageElement = document.getElementById('inflation-message');
    const marketingMessageElement = document.getElementById('marketing-message');
    const rdMessageElement = document.getElementById('rd-message');

    const inflationError = false;
    const marketingError = false;
    const rdError = false;

    handleCheckboxes(inflationCheckboxes, inflationMessageElement, 3, inflationError);
    handleCheckboxes(marketingCheckboxes, marketingMessageElement, 4, marketingError);
    handleCheckboxes(rdCheckboxes, rdMessageElement, 1, rdError);
});
