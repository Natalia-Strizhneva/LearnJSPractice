/* Проверить длину строки и, если она превосходит maxlength, заменяет конец str на "…", 
так, чтобы её длина стала равна maxlength. */

function truncate(str, maxlength) {
  return str.length > maxlength ? str.slice(0, maxlength - 1) + "…" : str;
}
