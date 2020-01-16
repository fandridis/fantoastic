export function getUuid() {
  function uuid(a: any, b: any) {
    for (
      b = a = "";
      a++ < 36;
      b +=
      (a * 51) & 52
        ? (a ^ 15 ? 8 ^ (Math.random() * (a ^ 20 ? 16 : 4)) : 4).toString(16)
        : "-"
    ) { }

    return b;
  }

  return uuid(null, null);
}