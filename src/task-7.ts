function getMessage(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello from TS"); //якщо замість 'Hello from TS' поставити число чи булеве значення, одразу показує помилку 
    }, 1000);
  });
}

getMessage().then(result => console.log(result)); // в консолі буде Hello from TS тобто string. 
// Бо тип Promise<string> вказує що функція поверне результат string після завершення асинхронної операції 

