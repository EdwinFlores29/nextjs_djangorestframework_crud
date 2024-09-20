Requisitos para la conexion de django para SQL Server 2022
pip install django djangorestframework mssql-django
y tener el protocolo TCP/IP, habilitado en Configuración de SQL Server 2022: 👇👇
![image](https://github.com/user-attachments/assets/6dbb4134-c065-46a0-85ce-ef5a133381c5)


además de agregar estas líneas el settings.py de un proyecto de carpeta raíz:👇👇👇👇

DATABASES = {
    'default': {
        'ENGINE': 'mssql',
        'NAME': 'db_django',
        'USER': 'sa',
        'PASSWORD': 'dariohakuna2#',
        'HOST': 'localhost',
        'PORT': '',

        'OPTIONS': {
            'driver': 'ODBC Driver 17 for SQL Server',
        },
    },
}

RECUERDA: tener estos archivos descargados y instalados en tu PC windows: 👇👇
https://inatecni-my.sharepoint.com/:u:/g/personal/ci_adan_chamorro_tecnacional_edu_ni/Edt2rOitjaxEhijdz8IExdoBYvYLrwebxNuBWP0qFuRIpA?e=Cy4MvF

![image](https://github.com/user-attachments/assets/6cdcda79-66c6-4495-a592-0efb3185d86f)

![image](https://github.com/user-attachments/assets/e32b74c2-1fe3-41eb-ab6e-771207792a47)


