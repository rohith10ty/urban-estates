import React, { useState } from 'react';
import { Calculator, DollarSign, Percent } from 'lucide-react';

export default function MortgageCalculator({ defaultPrice = 28500000 }) {
  const [price, setPrice] = useState(defaultPrice);
  const [downPercent, setDownPercent] = useState(25);
  const [interestRate, setInterestRate] = useState(6.25);
  const [loanTerm, setLoanTerm] = useState(30);

  const downPayment = (price * downPercent) / 100;
  const loanAmount = price - downPayment;

  // Monthly interest
  const monthlyRate = interestRate / 100 / 12;
  const numberOfPayments = loanTerm * 12;

  const monthlyPrincipalInterest =
    monthlyRate > 0
      ? (loanAmount *
          (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments))) /
        (Math.pow(1 + monthlyRate, numberOfPayments) - 1)
      : loanAmount / numberOfPayments;

  const monthlyTaxes = (price * 0.011) / 12;
  const monthlyInsurance = (price * 0.0035) / 12;
  const totalMonthly = monthlyPrincipalInterest + monthlyTaxes + monthlyInsurance;

  return (
    <div className="bg-white border border-brand-border p-6 sm:p-8">
      <div className="flex items-center gap-2 mb-6 pb-4 border-b border-brand-border">
        <Calculator className="w-5 h-5 text-brand-accent stroke-[1.8]" />
        <div>
          <h3 className="text-xl font-light text-brand-dark tracking-tight">
            Financial & Mortgage Estimator
          </h3>
          <p className="text-xs text-brand-muted">
            Bespoke financing model based on current institutional prime rates
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Controls */}
        <div className="space-y-5">
          {/* Purchase Price */}
          <div>
            <label className="block text-xs uppercase tracking-wider text-brand-muted font-medium mb-1.5">
              Valuation / Price ($)
            </label>
            <div className="relative">
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
                className="w-full bg-brand-surface border border-brand-border px-3.5 py-2.5 text-sm text-brand-dark focus:outline-none focus:border-brand-dark"
              />
              <DollarSign className="w-4 h-4 text-brand-muted absolute right-3.5 top-1/2 -translate-y-1/2" />
            </div>
          </div>

          {/* Down Payment */}
          <div>
            <div className="flex justify-between text-xs text-brand-muted mb-1.5">
              <span className="uppercase tracking-wider font-medium">Down Payment ({downPercent}%)</span>
              <span className="text-brand-dark font-medium">${Math.round(downPayment).toLocaleString()}</span>
            </div>
            <input
              type="range"
              min="10"
              max="60"
              step="5"
              value={downPercent}
              onChange={(e) => setDownPercent(Number(e.target.value))}
              className="w-full accent-brand-dark cursor-pointer"
            />
          </div>

          {/* Interest Rate & Loan Term */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs uppercase tracking-wider text-brand-muted font-medium mb-1.5">
                Interest Rate (%)
              </label>
              <div className="relative">
                <input
                  type="number"
                  step="0.05"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="w-full bg-brand-surface border border-brand-border px-3.5 py-2 text-sm text-brand-dark focus:outline-none focus:border-brand-dark"
                />
                <Percent className="w-3.5 h-3.5 text-brand-muted absolute right-3.5 top-1/2 -translate-y-1/2" />
              </div>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-brand-muted font-medium mb-1.5">
                Term (Years)
              </label>
              <select
                value={loanTerm}
                onChange={(e) => setLoanTerm(Number(e.target.value))}
                className="w-full bg-brand-surface border border-brand-border px-3.5 py-2 text-sm text-brand-dark focus:outline-none focus:border-brand-dark cursor-pointer"
              >
                <option value={15}>15 Years Fixed</option>
                <option value={30}>30 Years Fixed</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results Breakdown */}
        <div className="bg-brand-surface p-6 border border-brand-border flex flex-col justify-between">
          <div>
            <span className="text-[10px] uppercase tracking-ultra text-brand-muted block mb-1">
              Estimated Monthly Payment
            </span>
            <div className="text-3xl font-light text-brand-dark tracking-tight mb-6">
              ${Math.round(totalMonthly).toLocaleString()}
              <span className="text-xs font-normal text-brand-muted"> / mo</span>
            </div>

            {/* Breakdown Items */}
            <div className="space-y-3 text-xs border-t border-brand-border pt-4">
              <div className="flex justify-between">
                <span className="text-brand-muted">Principal & Interest</span>
                <span className="font-medium text-brand-dark">
                  ${Math.round(monthlyPrincipalInterest).toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-brand-muted">Est. Property Taxes</span>
                <span className="font-medium text-brand-dark">
                  ${Math.round(monthlyTaxes).toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-brand-muted">Est. Homeowners Insurance</span>
                <span className="font-medium text-brand-dark">
                  ${Math.round(monthlyInsurance).toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between pt-2 border-t border-brand-border/60">
                <span className="text-brand-muted">Total Financed Principal</span>
                <span className="font-medium text-brand-dark">
                  ${Math.round(loanAmount).toLocaleString()}
                </span>
              </div>
            </div>
          </div>

          <p className="text-[10px] text-brand-muted pt-4 font-light">
            *Estimates for illustration only. Private lending terms subject to underwriting & institutional credit approval.
          </p>
        </div>
      </div>
    </div>
  );
}
