"use client";
import { useEmiState } from "@/states/emi-states";
import { useLoan1 } from "@/states/loan-states";
import { HeaderText } from "./header";

export const Header2Text = () => {
  const [typeLoan] = useLoan1((state) => [state.loanType]);
  const [amount] = useEmiState((state) => [state.principle]);

  return (
    <HeaderText
      label={`${typeLoan} Loan Calculation of ${amount.toLocaleString()}`}
    />
  );
};
