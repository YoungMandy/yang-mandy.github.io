
// 本题只需要修改这一行的类型定义，使得24行的 ts-expect-error 不标红即可

type StrictConsumer<T> = (value: Record<string, number|string>) => void;

function testType() {
  interface Parent {
    parent: number;
  }

  interface Child extends Parent {
    child: string;
  }

  let parentConsumer: StrictConsumer<Parent> = (value) => {};

  parentConsumer({ parent: 1 });

  const child: Child = { parent: 1, child: '2' };

  // 我们希望你实现了第6行的类型之后，第24行这句 ts-expect-error 不标红，意味着 parentConsumer(child) 被 TS 认为是错误的。
  // @ts-expect-error
  parentConsumer(child);
}
