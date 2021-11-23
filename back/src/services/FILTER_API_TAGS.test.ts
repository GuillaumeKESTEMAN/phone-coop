import initFilterAPITags from './FILTER_API_TAGS';

describe('initFilterAPITags', () => {
  describe('should work', () => {
    const log = jest.fn();

    beforeEach(() => {
      log.mockClear();
    });

    test('with not ENV', async () => {
      const FILTER_API_TAGS = await initFilterAPITags({
        ENV: {},
        log,
      });

      expect(FILTER_API_TAGS).toMatchInlineSnapshot(`Array []`);
      expect({
        logCalls: log.mock.calls,
      }).toMatchSnapshot();
    });

    test('with empty ENV', async () => {
      const FILTER_API_TAGS = await initFilterAPITags({
        ENV: {},
        log,
      });

      expect(FILTER_API_TAGS).toMatchInlineSnapshot(`Array []`);
      expect({
        logCalls: log.mock.calls,
      }).toMatchSnapshot();
    });
    test('with some tags in ENV', async () => {
      const FILTER_API_TAGS = await initFilterAPITags({
        ENV: {},
        log,
      });

      expect(FILTER_API_TAGS).toMatchInlineSnapshot(`Array []`);
      expect({
        logCalls: log.mock.calls,
      }).toMatchSnapshot();
    });
  });
});
