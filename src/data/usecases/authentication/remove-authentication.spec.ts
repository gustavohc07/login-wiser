import faker from 'faker'
import {HttpPostClient} from "@src/data/protocols/http/http-post-client";
import {RemoteAuthentication} from "@src/data/usecases/authentication/remote-authentication";

describe('RemoteAuthentication', () => {
  test('Should call HttpPostClient with correct URL', async () => {
    class HttpPostClientSpy implements HttpPostClient {
      url?: string

      async post (url: string): Promise<void> {
        this.url = url
        return await Promise.resolve()
      }
    }
    const url = faker.internet.url()
    const httpPostClientSpy = new HttpPostClientSpy()
    const sut = new RemoteAuthentication(url, httpPostClientSpy)
    await sut.auth()
    expect(httpPostClientSpy.url).toBe(url)
  })
})
