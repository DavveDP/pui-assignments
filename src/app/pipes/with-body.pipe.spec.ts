import { WithBodyPipe } from './with-body.pipe';

describe('WithBodyPipe', () => {
  it('create an instance', () => {
    const pipe = new WithBodyPipe();
    expect(pipe).toBeTruthy();
  });
});
