export function singleton<Value>(name: string, value: () => Value): Value {
  const yolo = globalThis as any;
  yolo.__singletons ??= {};
  yolo.__singletons[name] ??= value();
  return yolo.__singletons[name];
}
