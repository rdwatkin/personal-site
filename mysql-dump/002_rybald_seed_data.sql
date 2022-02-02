-- Skills --
INSERT INTO rybald.skill (id, name, description)
VALUES(
  UUID(),
  "Website Development",
  "I have experience building and deploying full stack websites using React, Javascript/Typescript, Material UI, HTML, CSS, Docker, Kubernetes, Redux, Java Spring, Go, Python, Postgres, and MySql"
);

INSERT INTO rybald.skill (id, name, description)
VALUES(
  UUID(),
  "Networking",
  "During my internship at Arista Networks, I worked routinely with common network protocols such IP, TCP, DNS, FTP, HTTP, etc."
);

INSERT INTO rybald.skill (id, name, description)
VALUES(
  UUID(),
  "Embedded Programming",
  "During my internships with Gemini Design and Arista Networks I spent the majority of my time writing embedded code in C"
);

-- Experience --
INSERT INTO rybald.experience (id, position, employer, startDate, endDate, description)
VALUES(
  UUID(),
  "Software Engineer",
  "Digital Foundry",
  "2020-08-01",
  NULL,
  "Full Stack Web and Mobile Development: Built and designed multiple microservices and front end UIs in a variety of technologies for websites, google chrome extensions, mobile applications."
);

INSERT INTO rybald.experience (id, position, employer, startDate, endDate, description)
VALUES(
  UUID(),
  "Reader",
  "University of California, Santa Cruz",
  "2019-08-01",
  "2019-12-01",
  "Grading: Reader for Introduction to Computer Networks. Graded student submitted labs, homework assignments and exams in a timely manner. Attended lab sections to help students with homework as well as answer questions about previously graded assignments."
);

INSERT INTO rybald.experience (id, position, employer, startDate, endDate, description)
VALUES(
  UUID(),
  "Software Engineering Intern",
  "Arista Networks",
  "2019-07-01",
  "2019-09-01",
  "Feature Implementation: Expanded access control list matching capabilities on TCP flags using Python and C++ to help protect networks from TCP syn fragment DDos attacks. Wrote a command to configure these settings from the switch’s command line interface.\nBug Fixes:Fixed issues with internal testing tools crashing while sending TCP packets over IPv6. Closed a false positive test case in the routing tests. Removed checks on ingress interfaces when configuring egress support to avoid improper changes to topology properties."
);

INSERT INTO rybald.experience (id, position, employer, startDate, endDate, description)
VALUES(
  UUID(),
  "Software Engineering Intern",
  "Gemini Design",
  "2018-07-01",
  "2018-09-01",
  "Embedded Systems: Developed firmware in C for a Nucleo F401re micro-controller to communicate with the company’s custom board over SPI and to send and receive data through a computer’s serial communication port using USART thereby enabling the company to control their custom board from a GUI.\nUser Interface Design: Designed and implemented a serial communication port monitor using Microsoft Visual Studio in C# which sends and receives data from USB.\nScholarship: Received the Gemini Design Engineering Scholarship at the end of the summer internship for my abilities to quickly come up to speed on new technologies."
);

INSERT INTO rybald.experience (id, position, employer, startDate, endDate, description)
VALUES(
  UUID(),
  "Information Technology Intern",
  "Patenaude and Felix APC",
  "2017-07-01",
  "2017-09-01",
  "Help Desk & Data Entry: Promptly handled repair requests on a broad range of office technologies to maximize work space efficiency. Maintained and updated electronic client data daily to ensure company information was always up to date."
);

INSERT INTO rybald.experience(id, position, employer, startDate, endDate, description)
VALUES(
  UUID(),
  "Bachelor of Science",
  "University of California, Santa Cruz",
  "2016-09-01",
  "2019-12-01",
  "Major in Computer Science. Graduated with honors. GPA: 3.52 / 4"
);

-- Hobbies --
INSERT INTO rybald.hobby (id, title, description)
VALUES(
  UUID(),
  "Video Editing",
  "I enjoy making short over-editted clips in After Effects during my free time. I originally learned how to do it while making AMVs for Vine (rip)."
);

INSERT INTO rybald.hobby (id, title, description)
VALUES(
  UUID(),
  "Basketball",
  "I love watching and playing basketball with friends. Unfortunately, I'm a toxic and delusional Lakers fan."
);

INSERT INTO rybald.hobby (id, title, description)
VALUES(
  UUID(),
  "Video Games",
  "I've always played video games but it has been a huge help in keeping me connected with my friends during the pandemic. I usually play Warzone, Minecraft, and Super Smash Bros Ultimate. Since I was vaccinated, I began competing in SSBU!"
);

INSERT INTO rybald.hobby (id, title, description)
VALUES(
  UUID(),
  "Keyboards",
  "Recently, I've found building, upgrading, modifying and typing on custom keyboards has been extremely satisfying and relaxing."
);

INSERT INTO rybald.hobby (id, title, description)
VALUES(
  UUID(),
  "Anime",
  "Although I don't spend nearly as much time reading and watching as I used too, I still keep up with One Piece and some other series that have me hooked."
);
