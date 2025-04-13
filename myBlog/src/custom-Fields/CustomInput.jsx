import React from "react";
import { useField } from "informed";

const CustomInput = (props) => {
  const { fieldState, fieldApi, render, ref } = useField({
    ...props,
    validateOn: ["change", "blur", "submit"], // Validate on all events
    validateWhen: ["touched", "submitted"], // Show error when touched or submitted
  });
  const { value, error, showError } = fieldState;
  const { setValue, setTouched } = fieldApi;
  const { label, id, ...rest } = props;

  return render(
    <div style={{ marginBottom: "1rem" }}>
      {label && (
        <label
          htmlFor={id}
          style={{ display: "block", marginBottom: "0.5rem" }}
        >
          {label}
        </label>
      )}
      <input
        {...rest} // Spread only valid DOM props
        id={id}
        ref={ref}
        value={value || ""}
        onChange={(e) => {
          setValue(e.target.value);
          setTouched(true); // Mark as touched to trigger validation
        }}
        onBlur={() => setTouched(true)}
        style={{
          padding: "0.5rem",
          border: "1px solid",
          borderColor: showError ? "red" : "#ccc",
          borderRadius: "4px",
          width: "100%",
        }}
      />
      {showError && (
        <small style={{ color: "red", fontSize: "0.8rem" }}>{error}</small>
      )}
    </div>
  );
};

export default CustomInput;
