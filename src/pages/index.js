import { useState } from "react";
import { ReloadIcon } from "../assets/icons/ReloadIcon";
import { Brand } from "../components/Brand";
import { Card } from "../components/Card";
import { MainSection } from "../components/MainSection";
import { PassField } from "../components/PassField";
import { PrimaryButton } from "../components/PrimaryButton";

export default function Home() {

  const [password, setPassword] = useState("");
  const [reload, setReload] = useState(false);

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
        </div>
      </Card>
    </MainSection>
  );
}
