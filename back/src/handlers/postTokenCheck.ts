import { autoHandler } from 'knifecycle';
import { JWTService } from 'jwt-service';
import { MailjetService } from '../services/mailjet';
import YHTTPError from 'yhttperror';
import type { WhookAPIHandlerDefinition } from '@whook/whook';

export const definition: WhookAPIHandlerDefinition = {
  path: '/tokens/check',
  method: 'post',
  operation: {
    operationId: 'postTokenCheck',
    summary: 'Check the validity of the token',
    tags: [],
    parameters: [],
    requestBody: {
      description: 'Token flashed by the QR code reader',
      required: true,
      content: {
        'application/json': {
          schema: {
            type: 'object',
            required: ['token'],
            properties: {
              token: { type: 'string' },
            },
          },
        },
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              required: [
                'firstName',
                'givenName',
                'email',
                'tel',
                'phoneBrand',
                'phoneYear',
              ],
              properties: {
                firstName: { type: 'string' },
                givenName: { type: 'string' },
                email: { type: 'string' },
                tel: { type: 'string' },
                phoneBrand: { type: 'number' },
                phoneYear: { type: 'number' },
              },
            },
          },
        },
      },
    },
  },
};

type HandlerDependencies = {
  jwtToken: JWTService<API.PostToken.Body>;
};

export default autoHandler(postTokenCheck);

async function postTokenCheck(
  { jwtToken }: HandlerDependencies,
  { body }: API.PostTokenCheck.Input,
): Promise<API.PostTokenCheck.Output> {
  const decodedToken = await jwtToken.verify(body.token);

  return {
    body: decodedToken,
    status: 200,
  };
}
