export const LANGUAGE_VERSIONS = {
  javascript: "18.15.0",
  typescript: "5.0.3",
  python: "3.10.0",
  java: "15.0.2",
  csharp: "6.12.0",
  php: "8.2.3",
};

export const CODE_SNIPPETS = {
  javascript: `\nfunction inspire(action) {\n\tconsole.log("Keep pushing, " + action + "!");\n}\n\ninspire("coding");\n`,
  typescript: `\ntype Task = {\n\taction: string;\n}\n\nfunction inspire(task: Task) {\n\tconsole.log("Keep going, " + task.action + "!");\n}\n\ninspire({ action: "learning" });\n`,
  python: `\ndef inspire(action):\n\tprint("Never stop " + action + "!")\n\ninspire("creating")\n`,
  java: `\npublic class Motivation {\n\tpublic static void main(String[] args) {\n\t\tSystem.out.println("Consistency is key!");\n\t}\n}\n`,
  csharp:
    'using System;\n\nnamespace Motivation\n{\n\tclass Inspire { \n\t\tstatic void Main(string[] args) {\n\t\t\tConsole.WriteLine("Keep pushing forward in C#");\n\t\t}\n\t}\n}\n',
  php: "<?php\n\n$action = 'innovating';\necho 'Keep ' . $action . ' and thriving!';\n",
};

