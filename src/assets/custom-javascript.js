var handleCredentialResponse = function (response) {
    console.log(response.credential);
    
    $.ajax({
      type: 'POST',
      url: '/api/one-tap-authentication',
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      },
      contentType: 'application/JSON; charset=utf-8',
      processData: false,
      data: JSON.stringify({credential: response.credential}),
      
      success: function(result) {
        console.log('result',result);

        if (!result) {
          return ;
        }
        console.log(result);
        
        if (result.accessToken) {
          localStorage.setItem("accessToken", result.accessToken);

          localStorage.setItem("refreshToken", result.refreshToken);
          
        }
  
        if (result.roles) {
          localStorage.setItem("roles", JSON.stringify(result.roles));
        }
        location.reload();
      },
    });
  }