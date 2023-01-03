import React, { useState } from 'react';
import Input from '../../core/inputs/Input';
import PrimaryButton from '../../core/buttons/PrimaryButton';

const FreeTrialForm = () => {
  const [email, setEmail] = useState('');

  const readTermsOfService = () => console.log('Opening terms of service...');

  return (
    <div className="p-10 lg:p-20">
      <div className="my-3 leading-4">
        <div className="text-blue-800 font-bold text-3xl">Faster.Better.Easier.</div>
        <div className="text-blue-800 font-bold text-3xl">
          All in <span className="text-blue">ONE</span>LINE
        </div>
      </div>
      <p className="text-sm text-blue-700 my-3">
        Anim aute id magna aliqua ad ad non deserung sunt. Qui irure qui lorem cupidatat commodo.
        Elit sunt amer fugiat veniam occaecat fugiat aliqua.
      </p>
      <div className="flex my-4">
        <Input
          id="email"
          placeholder="Enter your email"
          value={email}
          onChange={setEmail}
          className="flex-1"
        />
        <PrimaryButton label="Start Free Trial" onClick={() => {}} className="mx-2" />
      </div>
      <p className="text-xs text-blue-700">
        Start your free trial, no credit card necessary. By providing your email, you agree to our
        <span className="underline ml-1" onClick={readTermsOfService}>
          terms of service
        </span>
        .
      </p>
    </div>
  );
};

export default FreeTrialForm;
