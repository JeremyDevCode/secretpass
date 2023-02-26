import { useEffect, useState } from "react";
import { ReloadIcon } from "../assets/icons/ReloadIcon";
import { Brand } from "../components/Brand";
import { Card } from "../components/Card";
import { MainSection } from "../components/MainSection";
import { PassField } from "../components/PassField";
import { PassLengthLabel } from "../components/PassLengthLabel";
import { PasswordQuality } from "../components/PasswordQuality";
import { PrimaryButton } from "../components/PrimaryButton";
import Slider from "../components/Slider";
import { ToggleLabel } from "../components/ToggleLabel";
import { ToggleSwitch } from "../components/ToggleSwitch";
import { generateSecretPass } from "../modules/generatePass";

export default function Home() {

  const [password, setPassword] = useState("");
  const [passLength, setPassLength] = useState(25);
  const [lowercase, setLowercase] = useState(true);
  const [uppercase, setUppercase] = useState(true);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(true);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    const newPass = generateSecretPass(
        passLength,
        lowercase,
        uppercase,
        numbers,
        symbols,
    );
    setPassword(newPass);
}, [passLength, lowercase, uppercase, numbers, symbols, reload]);


  return (
    <MainSection>
      <Card>
        <Brand/>
        <div className="flex flex-col gap-3">
          <div className="flex gap-2">
            <PassField value={password} setValue={setPassword} />
            <PrimaryButton
              disabled={!password}
              handleClick={() => setReload(!reload)}
            >
              <ReloadIcon />
            </PrimaryButton>
          </div>
          <PasswordQuality length={passLength} min={4} max={64} />
        </div>
        <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-3">
          <PassLengthLabel length={passLength} />
          <Slider
              value={passLength}
              handleChange={(e) => setPassLength(e.target.value)}
              min={4}
              max={64}
          />
        </div>
        <div className="flex items-center justify-between">
          <ToggleLabel
            content="Include lowercase characters"
            active={lowercase}
          />
          <ToggleSwitch
            active={lowercase}
            handleClick={() => setLowercase(!lowercase)}
            disabled={!uppercase && !numbers && !symbols}
          />
        </div>
        <div className="flex items-center justify-between">
            <ToggleLabel
              content="Include uppercase characters"
              active={uppercase}
            />
            <ToggleSwitch
              active={uppercase}
              handleClick={() => setUppercase(!uppercase)}
              disabled={!lowercase && !numbers && !symbols}
            />
          </div>
          <div className="flex items-center justify-between">
            <ToggleLabel content="Include numbers" active={numbers} />
            <ToggleSwitch
              active={numbers}
              handleClick={() => setNumbers(!numbers)}
              disabled={!lowercase && !uppercase && !symbols}
            />
          </div>
          <div className="flex items-center justify-between">
            <ToggleLabel content="Include symbols" active={symbols} />
            <ToggleSwitch
              active={symbols}
              handleClick={() => setSymbols(!symbols)}
              disabled={!lowercase && !uppercase && !numbers}
            />
          </div>
        </div>
      </Card>
      <span className="text-sm text-slate-300">
        Developed by  
        <a
          className="font-medium text-orange-500 no-underline hover:underline ml-1"
          href="https://github.com/jeremydevcode"
          target="_blank"
        >
          @jeremydevcode
        </a>
      </span>
    </MainSection>
  );
}
