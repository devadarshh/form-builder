function add() {
  const inputType = document.querySelector("#inputType").value;
  const inputValue = document.querySelector("#inputValue").value.trim();
  const placeholderValue = document
    .querySelector("#placeholderValue")
    .value.trim();

  if (!inputValue) {
    alert("Please enter a label or heading.");
    return;
  }

  const createEl = document.createElement("div");
  createEl.style.marginBottom = "15px";

  switch (inputType) {
    case "h3":
      const heading = document.createElement("h3");
      heading.textContent = inputValue;
      createEl.appendChild(heading);
      break;

    case "input":
      const label = document.createElement("label");
      label.textContent = inputValue;

      const input = document.createElement("input");
      input.type = "text";
      input.placeholder = placeholderValue;
      input.style.marginTop = "6px";
      input.style.display = "block";

      createEl.appendChild(label);
      createEl.appendChild(input);
      break;

    case "radio":
      const radioLabel = document.createElement("label");
      radioLabel.textContent = inputValue;
      createEl.appendChild(radioLabel);

      const radioGroup = document.createElement("div");

      for (let i = 1; i <= 3; i++) {
        const optionId = `radio-${inputValue}-${i}`;
        radioGroup.innerHTML += `
          <div>
            <input type="radio" id="${optionId}" name="${inputValue}" />
            <label for="${optionId}">Option ${i}</label>
          </div>
        `;
      }

      createEl.appendChild(radioGroup);
      break;

    default:
      alert("Invalid input type.");
      return;
  }

  document.querySelector("#form-preview").appendChild(createEl);
}
