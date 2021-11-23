import { exec } from 'child_process';
import YError from 'yerror';

describe('commands should work', () => {
  it('with ls', async () => {
    const { stdout, stderr } = await execCommand(
      'npm run whook --silent -- ls',
    );

    expect({
      stdout,
      stderr: stderr.replace(/ ([^ ]+)\/whook\//, ' /whook/'),
    }).toMatchSnapshot();
  });

  it('with env', async () => {
    const { stdout, stderr } = await execCommand(
      'npm run whook --silent -- env --name NODE_ENV',
    );

    expect({
      stdout,
      stderr: stderr.replace(/ ([^ ]+)\/whook\//, ' /whook/'),
    }).toMatchSnapshot();
  });

  it('with config', async () => {
    const { stdout, stderr } = await execCommand(
      'npm run whook --silent -- config --name HOST',
    );

    expect({
      stdout,
      stderr: stderr.replace(/ ([^ ]+)\/whook\//, ' /whook/'),
    }).toMatchSnapshot();
  });
});

async function execCommand(
  command: string,
): Promise<{ stdout: string; stderr: string }> {
  return new Promise((resolve, reject) => {
    exec(command, (err, stdout, stderr) => {
      if (err) {
        reject(YError.wrap(err, 'E_COMMAND_FAILURE', stdout, stderr));
        return;
      }
      resolve({ stdout, stderr });
    });
  });
}
