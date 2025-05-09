export const useAuth = () => {
  const sanctumFetch = useSanctumClient();



  async function register(form: RegisterForm){
    return await useSanctumFetch("/register", {
      method: "POST",
      body: form,

    });
  }

  return {register};

}


