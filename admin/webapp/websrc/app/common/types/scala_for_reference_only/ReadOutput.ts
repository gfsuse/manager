// Generated by ScalaTS 0.5.9: https://scala-ts.github.io/scala-ts/

export class ReadOutput {
  private static instance: ReadOutput;

  private constructor() {}

  public static getInstance() {
    if (!ReadOutput.instance) {
      ReadOutput.instance = new ReadOutput();
    }

    return ReadOutput.instance;
  }
}

export const ReadOutputInhabitant: ReadOutput = ReadOutput.getInstance();

export function isReadOutput(v: any): v is ReadOutput {
  return v instanceof ReadOutput && v === ReadOutputInhabitant;
}
