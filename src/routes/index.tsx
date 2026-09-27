import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowUpRight, Download, Github, Linkedin, Mail } from "lucide-react";
import profileAsset from "@/assets/profile.png.asset.json";
import resumeAsset from "@/assets/resume.pdf.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Manoharan Jayakumar | Embedded Software Engineer" },
      { name: "description", content: "Embedded Software Engineer with 3 years of experience in BSP, Embedded Linux, firmware, RTOS, and NXP i.MX SoC bring-up." },
      { property: "og:title", content: "Manoharan Jayakumar | Embedded Software Engineer" },
      { property: "og:description", content: "Explore embedded Linux, BSP, firmware, and SoC bring-up work by Manoharan Jayakumar." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

const contact = {
  email: "jrmano3639@gmail.com",
  github: "https://github.com/manoharanjr1424?tab=repositories",
  linkedin: "https://www.linkedin.com/in/manoharanjr",
};

const currentWork = [
  {
    title: "i.MX95 SMARC SOM",
    meta: "Current · BSP & Complete Bring-up",
    description: "BSP development and complete board bring-up for an NXP i.MX95 SOM following the SMARC standard, from DDR timing training through peripheral validation.",
    tags: ["i.MX95", "DDR", "Ethernet", "Wi-Fi", "PCIe", "LoRa", "CAN", "RS485"],
  },
  {
    title: "Truck-Based BMS Gateway",
    meta: "Current · i.MX93 + Sensor Node",
    description: "Gateway BSP and sensor-node firmware for a battery management architecture spanning Cortex-A Linux, Cortex-M control, RPMsg, and CAN-FD.",
    tags: ["i.MX93", "RPMsg", "CAN-FD", "Firmware upgrade", "Power optimization"],
  },
];

const projects = [
  {
    title: "i.MX94-Based IoT Gateway",
    meta: "Embedded Linux · BSP Development",
    description: "Built a minimal Linux image and handled broad bring-up, networking and protocol validation, storage boot, image optimization, driver integration, and kernel debugging.",
    tags: ["i.MX94", "Yocto", "U-Boot", "Ethernet", "MQTT", "SPI", "I2C", "eMMC"],
  },
  {
    title: "TM4C1294 Controller Firmware",
    meta: "Cortex-M4 · FreeRTOS",
    description: "Developed application firmware, custom-board bring-up, RFID source integration, state machines, timers, interrupts, LTE, and custom bootloader and OTA functionality.",
    tags: ["TM4C1294", "FreeRTOS", "RFID", "LTE", "Bootloader", "OTA"],
  },
  {
    title: "LoRa Gateway Firmware",
    meta: "MCXC244 · FreeRTOS",
    description: "Developed firmware for an M.2 LoRa gateway with bootloader, CRC error detection, fallback, host flashing, Semtech source porting, USB communication, and memory optimization.",
    tags: ["MCXC244", "LoRa", "USB", "SPI", "Bootloader", "Memory optimization"],
  },
];

const skillGroups = [
  ["Programming", "C · Embedded C · Shell scripting"],
  ["Embedded Linux", "Linux · Yocto · U-Boot · BSP · Kernel debugging"],
  ["Processors", "i.MX95 · i.MX94 · i.MX93 · MCXC244 · TM4C1294 · STM32"],
  ["RTOS", "FreeRTOS · Zephyr"],
  ["Communication", "CAN · CAN-FD · Ethernet · UART · RS232 · RS485 · SPI · I2C · USB · LoRa · Wi-Fi · MQTT"],
  ["Debugging", "JTAG · GDB · Oscilloscope / DSO · Minicom · Register-level debugging"],
];

function SectionHeading({ number, title, detail }: { number: string; title: string; detail?: string }) {
  return (
    <div className="section-heading">
      <span>{number}</span>
      <div>
        <h2>{title}</h2>
        {detail ? <p>{detail}</p> : null}
      </div>
    </div>
  );
}

function Portfolio() {
  return (
    <div className="portfolio-shell">
      <header className="topbar">
        <a className="identity" href="#top" aria-label="Go to top">
          <span className="status-dot" />
          <span>MJ / Embedded Systems</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#skills">Skills</a>
          <a href={`mailto:${contact.email}`}>Contact</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero wrap">
          <div className="hero-copy">
            <p className="kicker">Embedded Software Engineer · 3 years</p>
            <h1>Manoharan<br />Jayakumar</h1>
            <p className="hero-summary">I build dependable systems where hardware meets software—from MCU firmware and board bring-up to Embedded Linux BSPs on NXP i.MX platforms.</p>
            <div className="actions">
              <a className="button button-primary" href={resumeAsset.url} download="Manoharan_Jayakumar_Resume.pdf"><Download aria-hidden="true" /> Download resume</a>
              <a className="button button-secondary" href={`mailto:${contact.email}`}><Mail aria-hidden="true" /> Email me</a>
            </div>
            <div className="social-links" aria-label="Professional profiles">
              <a href={contact.linkedin} target="_blank" rel="noreferrer"><Linkedin aria-hidden="true" /> LinkedIn <ArrowUpRight aria-hidden="true" /></a>
              <a href={contact.github} target="_blank" rel="noreferrer"><Github aria-hidden="true" /> GitHub <ArrowUpRight aria-hidden="true" /></a>
            </div>
          </div>
          <div className="portrait-wrap">
            <div className="portrait-lines" aria-hidden="true" />
            <img src={profileAsset.url} alt="Manoharan Jayakumar, Embedded Software Engineer" />
            <span className="portrait-caption">Hardware → software → working systems</span>
          </div>
        </section>

        <section className="proof-band" aria-label="Professional highlights">
          <div className="proof-grid wrap">
            <div><span>Experience</span><strong>3 years</strong></div>
            <div><span>Focus</span><strong>BSP & Linux</strong></div>
            <div><span>Platforms</span><strong>NXP i.MX93–95</strong></div>
            <div><span>Systems</span><strong>Cortex-A + M</strong></div>
          </div>
        </section>

        <section className="content-section wrap" id="expertise">
          <SectionHeading number="01" title="Core technical expertise" detail="A concise view of where I contribute fastest." />
          <div className="expertise-grid">
            <div>
              <h3>System bring-up</h3>
              <ul>
                <li>BSP integration and complete board bring-up</li>
                <li>Yocto, U-Boot, Linux image and boot-flow work</li>
                <li>DDR, Ethernet, PCIe, Wi-Fi, storage and serial interfaces</li>
              </ul>
            </div>
            <div>
              <h3>Firmware & communication</h3>
              <ul>
                <li>Embedded C across bare-metal and RTOS systems</li>
                <li>RPMsg communication across Cortex-A and Cortex-M</li>
                <li>CAN-FD, LoRa, USB, MQTT and low-level protocols</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="content-section wrap" id="work">
          <SectionHeading number="02" title="Current engineering work" detail="Hands-on responsibilities across silicon, firmware, and Linux." />
          <div className="work-list">
            {currentWork.map((item, index) => <Project key={item.title} item={item} index={index + 1} current />)}
          </div>
        </section>

        <section className="content-section wrap">
          <SectionHeading number="03" title="Selected projects" detail="Professional work spanning industrial gateways, firmware, and connectivity." />
          <div className="work-list">
            {projects.map((item, index) => <Project key={item.title} item={item} index={index + 3} />)}
          </div>
        </section>

        <section className="content-section wrap" id="skills">
          <SectionHeading number="04" title="Technical toolkit" detail="The technologies I use to diagnose, build, and validate embedded systems." />
          <div className="skills-grid">
            {skillGroups.map(([title, body]) => (
              <div className="skill" key={title}><h3>{title}</h3><p>{body}</p></div>
            ))}
          </div>
        </section>

        <section className="journey-section">
          <div className="wrap">
            <SectionHeading number="05" title="Engineering progression" detail="From microcontroller fundamentals to complete SoC platforms." />
            <div className="journey-grid">
              {[
                ["01", "MCU firmware", "C, peripherals, and board-level fundamentals"],
                ["02", "Real-time systems", "FreeRTOS, tasks, queues, interrupts, and bring-up"],
                ["03", "Boot & connectivity", "Bootloaders, LoRa, OTA, and optimization"],
                ["04", "Embedded Linux", "Yocto, networking, storage, and kernel debugging"],
                ["05", "SoC platforms", "i.MX93 / i.MX95, RPMsg, BSP, Cortex-A + M"],
              ].map(([number, title, body]) => (
                <div className="journey-step" key={number}><span>{number}</span><h3>{title}</h3><p>{body}</p></div>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section wrap" id="contact">
          <p className="kicker">Let’s talk embedded systems</p>
          <h2>Looking for an engineer who can work close to the hardware?</h2>
          <p>For embedded software, BSP, firmware, Linux, or systems engineering opportunities, reach out directly.</p>
          <div className="actions">
            <a className="button button-primary" href={`mailto:${contact.email}`}><Mail aria-hidden="true" /> {contact.email}</a>
            <a className="button button-secondary" href={contact.linkedin} target="_blank" rel="noreferrer"><Linkedin aria-hidden="true" /> Connect on LinkedIn</a>
          </div>
        </section>
      </main>

      <footer className="footer wrap"><span>© 2026 Manoharan Jayakumar</span><a href="#top">Back to top <ArrowDown className="back-arrow" aria-hidden="true" /></a></footer>
    </div>
  );
}

function Project({ item, index, current = false }: { item: { title: string; meta: string; description: string; tags: string[] }; index: number; current?: boolean }) {
  return (
    <article className="project-row">
      <div className="project-index">{String(index).padStart(2, "0")}</div>
      <div className="project-body">
        <div className="project-title-row"><h3>{item.title}</h3><span>{item.meta}</span></div>
        <p>{item.description}</p>
        <div className="tags">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
      </div>
      {current ? <span className="current-label"><span className="status-dot" /> Current</span> : null}
    </article>
  );
}
