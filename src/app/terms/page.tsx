import { Section } from "@/components/section";
import { Heading, Text } from "@/components/ui/typography";

export default function TermsPage() {
  return (
    <Section centerContent>
      <Heading variant="h1" size="4xl" className="mb-16 text-center">
        Terms & Conditions
      </Heading>
      <div className="space-y-8 mx-auto max-w-3xl">
        <Text variant="muted" size="sm">
          Last updated November 14, 2024
        </Text>

        <Text>
          {`This website-hosted user interface (this "Interface") is a frontend software portal to the
          VDEX protocol, a decentralized and community-driven blockchain and tools (the "Protocol").
          This Interface is made available by VDEX. However, all transactions conducted on the
          Protocol are accessible by any user, entity, or third party, and there may be a number of
          third-party web and mobile user interfaces that allow for interaction with the Protocol.
          YOUR USE OF THE INTERFACE AND PROTOCOL IS ENTIRELY AT YOUR OWN RISK. VDEX is not
          responsible for any loss or damages resulting from users interacting with the Protocol.`}
        </Text>

        <div>
          <Heading variant="h2" size="lg" className="mb-4">
            1. NO WARRANTIES
          </Heading>
          <Text className="uppercase">
            {`THE INTERFACE IS AVAILABLE ON AN "AS IS" BASIS WITHOUT WARRANTIES OF ANY KIND, EITHER
            EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, WARRANTIES OF MERCHANTABILITY, TITLE,
            FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.`}
          </Text>
        </div>

        <div className="flex flex-col gap-4">
          <Text>
            You assume all risks associated with using the Interface and digital assets and
            decentralized systems generally, including but not limited to:
          </Text>
          <ul className="flex flex-col gap-2 pl-6 list-none">
            {[
              "digital assets are highly volatile;",
              "using digital assets is inherently risky due to both features of such assets and potential unauthorized acts of third parties;",
              "you may not have ready access to assets; and",
              "you may lose some or all of your tokens or other assets.",
            ].map((item, index) => (
              <li key={index}>
                <Text as="span">
                  ({String.fromCharCode(97 + index)}) {item}
                </Text>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <Text>
            You agree that you will have no recourse against anyone else for any losses due to the
            use of the Interface. For example, these losses may arise from or relate to:
          </Text>
          <ul className="flex flex-col gap-2 pl-6 list-none">
            {[
              "incorrect information;",
              "software or network failures;",
              "corrupted cryptocurrency wallet files;",
              "unauthorized access;",
              "errors, mistakes, or inaccuracies; or",
              "third-party activities.",
            ].map((item, index) => (
              <li key={index}>
                <Text as="span">
                  ({String.fromCharCode(105 + index)}) {item}
                </Text>
              </li>
            ))}
          </ul>
        </div>

        <Text>
          Accordingly, you understand and agree to assume full responsibility for all risks of
          accessing and using the Interface and interacting with the Protocol.
        </Text>

        <div>
          <Heading variant="h2" size="lg" className="mb-4">
            2. DATA COLLECTION
          </Heading>
          <Text>
            The Interface does not collect any personal data, and your interaction with the Protocol
            will solely be through your public digital wallet address. Any personal or other data
            that you may make available in connection with the Protocol may not be private or
            secure.
          </Text>
        </div>

        <div className="flex flex-col gap-4">
          <Heading variant="h2" size="lg" className="mb-4">
            3. PROHIBITED ACTIVITY
          </Heading>
          <Text>
            You agree not to engage in, or attempt to engage in, any of the following categories of
            prohibited activity in relation to your access and use of the Interface:
          </Text>
          <ul className="flex flex-col gap-4 pl-6 sm:pl-10 list-disc">
            <li>
              <Text>
                <span className="font-semibold">Intellectual Property Infringement:</span> Activity
                that infringes on or violates any copyright, trademark, service mark, patent, right
                of publicity, right of privacy, or other proprietary or intellectual property rights
                under the law.
              </Text>
            </li>
            <li>
              <Text>
                <span className="font-semibold">Cyberattack:</span> Activity that seeks to interfere
                with or compromise the integrity, security, or proper functioning of any computer,
                server, network, personal device, or other information technology system, including
                (but not limited to) the deployment of viruses and denial of service attacks.
              </Text>
            </li>
            <li>
              <Text>
                <span className="font-semibold">Fraud and Misrepresentation:</span> Activity that
                seeks to defraud us or any other person or entity, including (but not limited to)
                providing any false, inaccurate, or misleading information in order to unlawfully
                obtain the property of another.
              </Text>
            </li>
            <li>
              <Text>
                <span className="font-semibold">Market Manipulation:</span> Activity that violates
                any applicable law, rule, or regulation concerning the integrity of trading markets,
                including (but not limited to) the manipulative tactics commonly known as spoofing
                and wash trading.
              </Text>
            </li>
            <li>
              <Text>
                <span className="font-semibold">Any Other Unlawful Conduct:</span> Activity that
                violates any applicable law, rule, or regulation.
              </Text>
            </li>
          </ul>
        </div>

        <div>
          <Heading variant="h2" size="lg" className="mb-4">
            4. NO PROFESSIONAL ADVICE
          </Heading>
          <Text>
            All information provided by the Interface is for informational purposes only and should
            not be construed as professional advice. You should not take, or refrain from taking,
            any action based on any information contained in the Interface. Before making any
            financial, legal, or other decisions involving the Interface, you should seek
            independent professional advice from a qualified professional.
          </Text>
        </div>

        <div>
          <Heading variant="h2" size="lg" className="mb-4">
            5. ADDITIONAL PROGRAMS
          </Heading>
          <Text>
            VDEX may, from time to time, in its sole discretion, make certain programs, special
            offers, challenges, bonuses, or other promotions available to users. The terms and
            conditions applicable to any such special offers will be determined by VDEX in its sole
            discretion and communicated to users in conjunction with any such programs.
          </Text>
        </div>

        <div className="flex flex-col gap-4">
          <Heading variant="h2" size="lg" className="mb-4">
            6. LIMITATIONS, RESTRICTIONS, AND OTHER TERMS
          </Heading>
          <Text>
            {`VDEX's determinations of participant eligibility or any questions or disputes arising
            from anyone's use of the Interface or any other VDEX rules or restrictions shall be
            final and binding and not subject to challenge or appeal.`}
          </Text>
          <Text>
            Without notice to you, VDEX reserves the right to suspend or terminate your
            participation in any feature on the Interface in its sole discretion, including if VDEX
            determines or suspects that your use of the Interface is unauthorized, deceptive,
            fraudulent, unlawful, or intentionally subverts the purposes of the Interface.
          </Text>
          <Text>
            If you have a right to claim any rewards or other items in association with a
            promotional program, you may be subject to additional terms or conditions applicable to
            such claims process.
          </Text>
          <Text>
            {`You are responsible for paying all transaction fees associated with claiming any
            on-chain asset, including any token made available on the Protocol. "Transaction Fees"
            refers to the fees required to be paid to execute a transaction on the Protocol,
            sometimes known as "gas fees."`}
          </Text>
          <Text>
            Transactions processed by the blockchain are irreversible. You acknowledge that any
            transaction you initiate by connecting your wallet to the Protocol using the Interface
            may be irrevocable.
          </Text>
          <Text>
            VDEX is not responsible for any problems or technical malfunction of any telephone,
            Internet, or blockchain network or lines, online systems, servers, providers, computer
            equipment, software, or messaging platform, or as a result of technical problems or
            traffic congestion on the Internet, any website, or any application, or any combination
            thereof.
          </Text>
        </div>

        <div>
          <Heading variant="h2" size="lg" className="mb-4">
            7. CHANGES TO ANY PROGRAM MADE AVAILABLE THROUGH THE INTERFACE
          </Heading>
          <Text>
            VDEX reserves the right to change, update, and/or discontinue, in whole or in part,
            either temporarily or permanently, any portion of the Interface or any program made
            available through the Interface and/or any policy, FAQ, or guidelines, at any time in
            its sole discretion and without advance notice to you.
          </Text>
        </div>

        <div>
          <Heading variant="h2" size="lg" className="mb-4">
            8. RELEASE OF CLAIMS
          </Heading>
          <Text>
            You expressly agree that you assume all risks in connection with your access and use of
            the Interface and your interaction with the Protocol. You further expressly waive and
            release us from any and all liability, claims, causes of action, or damages arising from
            or in any way relating to your use of the Interface and your interaction with the
            Protocol.
          </Text>
        </div>

        <div className="flex flex-col gap-4">
          <Heading variant="h2" size="lg" className="mb-4">
            9. INDEMNITY
          </Heading>
          <Text>
            You agree to hold harmless, release, defend, and indemnify us and our officers,
            directors, employees, contractors, agents, affiliates, and subsidiaries from and against
            all claims, damages, obligations, losses, liabilities, costs, and expenses arising from:
          </Text>
          <ul className="flex flex-col gap-2 pl-6 list-none">
            {[
              "your access and use of the Interface;",
              "your violation of any term or condition of these terms of use, the right of any third party, or any other applicable law, rule, or regulation; and",
              "any other party's access and use of the Interface with your assistance or using any device or account that you own or control.",
            ].map((item, index) => (
              <li key={index}>
                <Text as="span">
                  ({String.fromCharCode(97 + index)}) {item}
                </Text>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <Heading variant="h2" size="lg" className="mb-4">
            10. LIMITATION OF LIABILITY
          </Heading>
          <Text>
            Under no circumstances shall we or any of our officers, directors, employees,
            contractors, agents, affiliates, or subsidiaries be liable to you for any indirect,
            punitive, incidental, special, consequential, or exemplary damages, including (but not
            limited to) damages for loss of profits, goodwill, use, data, or other intangible
            property, arising out of or relating to any access or use of the Interface.
          </Text>
        </div>

        <div className="flex flex-col gap-4">
          <Heading variant="h2" size="lg" className="mb-4">
            11. GOVERNING LAW AND FORUM CHOICE/CLASS ACTION WAIVER
          </Heading>
          <Text>
            These Terms of Use and any action related thereto will be governed by, and all disputes
            arising under, relating to, or in connection with these Terms shall be resolved in
            accordance with, the laws of Panama, without regard to the conflicts of law provisions
            of such jurisdiction.
          </Text>
          <Text>
            {`Any claim or dispute arising under these Terms will take place on an individual basis
            without resort to any form of class or representative action (the "Class Action
            Waiver").`}
          </Text>
        </div>

        <div className="pt-8 border-t">
          <Heading variant="h2" size="xl" className="mb-4">
            Contact Information
          </Heading>
          <Text>
            For further questions or information regarding these Terms, please contact us at{" "}
            <span className="text-secondary hover:underline">
              <a href="mailto:team@virtuallabs.network">team@virtuallabs.network</a>
            </span>
          </Text>
        </div>
      </div>
    </Section>
  );
}
