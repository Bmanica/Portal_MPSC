function Tags(id, title, linkd, img, pubDate) {
    this.id = id;
    this.title = title;
    this.linkd = linkd;
    this.img = img;
    this.pubDate = pubDate;
}

var clientList = [
    { text: "Anonimo", value: "Anonimo", checked: false },
    { text: "Pessoa fisica", value: "Pessoa fisica", checked: false },
    { text: "Pessoa juridica", value: "Pessoa juridica", checked: false },
];

var serverList = [
    { text: "Sugestao", value: "Sugestao", checked: false },
    { text: "Elogio", value: "Elogio", checked: false },
    { text: "Reclamacao", value: "Reclamacao", checked: false },
    { text: "Denuncia", value: "Denuncia", checked: false }
];
localStorage.setItem("clientList", JSON.stringify(clientList));
localStorage.setItem("serverList", JSON.stringify(serverList));

var str = "http://www.mpsc.mp.br/";
var parameters = "?rodape=false&cabecalho=false&caminhorato=false&menuesquerda=false";


angular.module('ionicApp', ['ionic', 'ngCordova'])

.run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(false); //Esconde a barra de acessórios
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
})

.config(function ($stateProvider, $urlRouterProvider, $sceProvider) {
    $sceProvider.enabled(false);
    $stateProvider
    .state('page1', {
        url: '/1',
        templateUrl: 'page1.html'
    })
    .state('page2', {
        url: '/2',
        templateUrl: 'page2.html'
    })
    .state('page3', {
        url: '/3',
        templateUrl: 'page3.html',
        controller: "MyCtrl"
    })
    .state('page4', {
        url: '/4',
        templateUrl: 'page4.html',
        controller: "MyCtrl"
    })
    .state('page5', {
        url: '/5',
        templateUrl: 'page5.html',
        controller: "MyCtrl"
    })
    .state('page6', {
        url: '/6',
        templateUrl: 'page6.html',
        controller: "MyCtrl"
    })
    .state('page7', {
        url: '/7',
        templateUrl: 'page7.html',
        controller: "MyCtrl"
    })
    .state('page8', {
        url: '/8',
        templateUrl: 'page8.html',
        controller: "MyCtrl"
    })
    .state('page9', {
        url: '/9',
        templateUrl: 'page9.html',
        controller: "MyCtrl"
    })
    .state('page10', {
        url: '/10',
        templateUrl: 'page10.html',
        controller: "MyCtrl"
    })
    .state('page11', {
        url: '/11',
        templateUrl: 'page11.html',
        controller: "MyCtrl"
    })
    .state('page12', {
        url: '/12',
        templateUrl: 'page12.html',
        controller: "MyCtrl"
    })
    .state('page13', {
        url: '/13',
        templateUrl: 'page13.html',
        controller: "MyCtrl"
    })
    .state('page14', {
        url: '/14',
        templateUrl: 'page14.html',
        controller: "MyCtrl"
    })
    $urlRouterProvider.otherwise("/1");
})
.controller('MyCtrl', function ($scope, feedHandler, $rootScope, $cordovaNetwork, $ionicPopup, $timeout, $state) {
    document.addEventListener("deviceready", function () {
        $scope.network = $cordovaNetwork.getNetwork();
        $scope.isOnline = $cordovaNetwork.isOnline();
        $scope.$apply();
        $scope.filler = feedHandler.xmlParser();
        // listen for Online event
        $rootScope.$on('$cordovaNetwork:online', function (event, networkState) {
            $scope.newsTitle = 'Noticias';
            $scope.mainTitle = 'Portal';
            feedHandler.swap('eno', 'owt');
            feedHandler.swap('one', 'two');
            feedHandler.swap('aus', 'zwei');
            feedHandler.swap('calc1', 'calc2');
            $scope.filler = feedHandler.download('http://portal.mp.sc.gov.br/portal/conteudo/publicacoes/do_mpsc_2015-10-28.pdf', 'appdata', 'diariooficial');
            $scope.isOnline = true;
            $scope.network = $cordovaNetwork.getNetwork();
            $scope.$apply();
        })

        // listen for Offline event
        $rootScope.$on('$cordovaNetwork:offline', function (event, networkState) {
            $scope.mainTitle = 'Portal(Offline)';
            $state.go('page1');
            $scope.newsTitle = 'Noticias(Offline - Detalhes das noticias indisponiveis)';
            feedHandler.swap('owt', 'eno');
            feedHandler.swap('two', 'one');
            feedHandler.swap('zwei', 'aus');
            feedHandler.swap('calc2', 'calc1');
            $scope.isOnline = false;
            $scope.network = $cordovaNetwork.getNetwork();
            $scope.$apply();
        });
        $timeout(function () {
            myPopup.close();
        }, 3000);

    }, false);
    //-------------Ouvidoria---------------------
    $scope.clientSideList = clientList;
    $scope.serverSideList = serverList;

    $scope.data = {
        clientSide: 'ng',
        serverSide: 'ng'
    };

    $scope.formModel = function () {
        var client;
        var server;
        for (var i = 0; i < 2; i++) {
            if (clientList[i].checked == true) {
                alert(clientList[i].checked);
                client = clientList[i].value;
            }
        }
        for (var i = 0; i < 3; i++) {
            if (serverList[i].checked == true) {
                server = serverList[i].value;
            }
        }
        localStorage.setItem("client", client);
        localStorage.setItem("server", server);
    }
    $scope.title_type = localStorage.getItem("client");
    $scope.title_mode = localStorage.getItem("server");
    $scope.page_selector = "page14";
    //-----------------------------------------------
    //----Calculadora----//
    $scope.titulo = "Calculadora de antecipação de prestações";
    $scope.descAntiga = "Caso você tenha firmado seu contrato até 04.05.2014, utilize a calculadora abaixo.";
    $scope.descNova = "Caso você tenha firmado seu contrato a partir de 05.05.2014, utilize a calculadora abaixo."
    $scope.descricao = "Informe a data em que o contrato foi firmado:"
    $scope.cliqueaqui = "Clique aqui!"
    $scope.newsTitle = 'Noticias';
    $scope.mainTitle = 'Portal';

    $scope.ajuda = "Resultado apenas informativo. Não descarte outras alternativas de cálculo."
    $scope.descVlrParcela = "Valor da parcela:";
    $scope.descTaxaJuros = "Taxa de juros (ao mês):";
    $scope.descDataVencimento = "Dia do vencimento da parcela:";
    $scope.descDataQuitacao = "Data de quitação:";
    $scope.descQtdParcelas = "Quantidade de parcelas:";

    $scope.dtHoje = new Date(2015, 6, 15).getTime();
    $scope.dtAmanha = new Date(2015, 6, 16).getTime();

    $scope.dtDiferenca = $scope.dtAmanha - $scope.dtHoje;


    $scope.meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

    $scope.retorno = new Array();
    $scope.Voltar = function () {
        window.history.back(1);
    }
    $scope.TemRetorno = function () {
        return ($scope.retorno.length > 0);
    }
    $scope.mostraCalculo = function (calc) {
        $scope.retorno = new Array();

        var hoje = calc.dtQuitacao;

        var dia = new Date(hoje).getDate();
        var mes = new Date(hoje).getMonth();
        var ano = new Date(hoje).getFullYear();

        if (dia > calc.dtVencimento) {
            mes = mes + 1;
            if (mes == 12) {
                mes = 0;
                ano = ano + 1;
            }
        }
        $scope.dtPagamento = calc.dtQuitacao;

        var umDia = 86400000; //um dia em milissegundos

        var acumulado = 0;
        for (i = 1; i <= calc.qtdParcelas; i++) {
            var vencimento = new Date(ano, mes, calc.dtVencimento, 0, 0, 0, 0);

            var difDias = ((vencimento.getTime() - calc.dtQuitacao.getTime()) / umDia); //diferença em dias


            var valor = (calc.vlrParcela / Math.pow(Math.pow((1 + calc.txJuros / 100), 1 / 30), difDias));
            acumulado = acumulado + valor;

            var ret = { dtVencimento: vencimento, vlrParcela: valor, vlrAcumulado: acumulado };
            $scope.retorno.push(angular.copy(ret));

            mes = mes + 1;
            if (mes == 12) {
                mes = 0;
                ano = ano + 1;
            }
        }
        $scope.totalAcumulado = acumulado;
    }

    //----Calculadora----//

    $scope.show = function () {
        feedHandler.showPDF();
    }

    $scope.items = feedHandler.offLineParser();
    //$scope.items = feedHandler.newsParser();
    //$scope.noticias = feedHandler.newsParser();

    $scope.goto = function (link) {
        localStorage.setItem("link", link);
    }
    $scope.test = function () {
        feedHandler.Sync();
    }
    $scope.getUrl = function () {
        var url = 'http://www.google.com';
        return url;
    }
    $scope.frameContent = localStorage.getItem("link");
    //-------------------------Diario Oficial-----------------------//
    $scope.last = "https://docs.google.com/gview?embedded=true&url=http://www.mpsc.mp.br/spo/diariooficial/ultimaedicao";
    $scope.previous = "http://www.mpsc.mp.br/diario-oficial/anteriores?rodape=false&cabecalho=false&caminhorato=false&menuesquerda=false";
    $scope.old = "http://www.mpsc.mp.br/diario-oficial/edicoes-antigas?rodape=false&cabecalho=false&caminhorato=false&menuesquerda=false";

    $scope.getLink = function (i) {
        switch (i) {
            case 0:
                return $scope.last;
                break;
            case 1:
                return $scope.previous;
                break;
            case 2:
                return $scope.old;
                break;
            default:
                alert("No link selected");
                break;
        }
    }
    //--------variavel do botão de rodapé do diario oficial -----------//
    $scope.clickAnimation = function (num) {
        $scope.var = num;
    }
    //-----------------------------------------------------------------//
    $scope.data = {
        "filter": 'last',
        "links": [
            {
                type: 'last',
                link: 'https://docs.google.com/gview?embedded=true&url=http://www.mpsc.mp.br/spo/diariooficial/ultimaedicao'
            },
            {
                type: 'previous',
                link: 'http://www.mpsc.mp.br/diario-oficial/anteriores?rodape=false&cabecalho=false&caminhorato=false&menuesquerda=false'
            },
            {
                type: 'old',
                link: 'http://www.mpsc.mp.br/diario-oficial/edicoes-antigas?rodape=false&cabecalho=false&caminhorato=false&menuesquerda=false'
            }
        ]
    };

    $scope.click = function (item) {
        switch (item) {
            case 0:
                cordova.InAppBrowser.open('https://twitter.com/mpscnoticias', '_blank', 'location=yes');
                break;
            case 1:
                cordova.InAppBrowser.open('http://www.youtube.com/user/ministeriopublicosc', '_blank', 'location=yes');
                break;
            case 2:
                cordova.InAppBrowser.open('https://www.facebook.com/ministeriopublicosc', '_blank', 'location=yes');
                break;
            case 3:
                window.open("http://portal.mp.sc.gov.br/portal/conteudo/publicacoes/do_mpsc_2015-10-09.pdf", "_blank", 'location=no');
                break;
            default:
                window.open("http://portal.mp.sc.gov.br/portal/conteudo/publicacoes/do_mpsc_2015-10-09.pdf", "_blank", 'location=no');
                break;
        }
    }
})


.factory("feedHandler", function () {
    return {
        xmlParser: function () {
            var parser = new DOMParser();
            var items_tags = new Array;
            var xmlhttp = new XMLHttpRequest();
            xmlhttp.onreadystatechange = function () {
                if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                    var doc = xmlhttp.responseText;
                    xmlDoc = parser.parseFromString(doc, "text/xml");
                    var x = xmlDoc.getElementsByTagName("item");
                    var linkd;
                    var title;
                    var img;
                    var pubDate;
                    var id;
                    for (i = 0; i < x.length; i++) {
                        id = i;
                        var temp0 = x[i].getElementsByTagName("link")[0].childNodes[0].nodeValue;
                        var linkConcat = str.concat(temp0);
                        linkd = linkConcat.concat(parameters);
                        title = x[i].getElementsByTagName("title")[0].childNodes[0].nodeValue;
                        var temp1 = x[i].getElementsByTagName("linkimg")[0].childNodes[0].nodeValue.replace("src=", "").replace('"', "").replace('"', "");
                        if (temp1.indexOf(".gif") != -1) {
                            img = "http://www.deolhonailha.com.br/fmanager/doni/news/imagem35631_1.jpg";
                        } else {
                            img = temp1;
                        }
                        pubDate = x[i].getElementsByTagName("pubDate")[0].childNodes[0].nodeValue;
                        var tags = new Tags(id, title, linkd, img, pubDate);
                        localStorage.setItem(id, JSON.stringify(tags));
                        items_tags.push(tags);
                    }
                }
            }
            xmlhttp.open("GET", "http://homologportal.mpsc.mp.br/portal/home/mobile", false);
            xmlhttp.send();
        },
        offLineParser: function () {
            var items_tags = new Array;
            for (i = 0; i < 5; i++) {
                var temp = JSON.parse(localStorage.getItem(i));
                items_tags.push(temp);
            }
            return items_tags;
        },
        swap: function (one, two) {
            document.getElementById(one).style.display = 'block';
            document.getElementById(two).style.display = 'none';
        },
        download: function (URL, Folder_Name, File_Name) {
            //step to request a file system 
            window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, fileSystemSuccess, fileSystemFail);

            function fileSystemSuccess(fileSystem) {
                var download_link = encodeURI(URL);
                ext = download_link.substr(download_link.lastIndexOf('.') + 1); //Get extension of URL

                var directoryEntry = fileSystem.root; // to get root path of directory
                directoryEntry.getDirectory(Folder_Name, { create: true }, onDirectorySuccess, onDirectoryFail); // creating folder in sdcard
                //var fp = fileSystem.root.toURL(); // Returns Fulpath of local directory
                var fp = cordova.file.externalApplicationStorageDirectory;
                //alert(fp);
                fp = fp + "/" + Folder_Name + "/" + File_Name + "." + ext; // fullpath and name of the file which we want to give
                localStorage.setItem("filePath", fp);
                filetransfer(download_link, fp);
            }

            function onDirectorySuccess(parent) {
                //alert('Directory created' + parent.name);
            }

            function onDirectoryFail(error) {
                //Error while creating directory
                alert("Unable to create new directory: " + error.code);
            }

            function fileSystemFail(evt) {
                //Unable to access file system
                alert(evt.target.error.code);
            }

            function filetransfer(download_link, fp) {
                var fileTransfer = new FileTransfer();
                // File download function with URL and local path
                fileTransfer.download(download_link, fp,
                                    function (entry) {
                                        //alert("download complete: " + entry.toURL());
                                        //show(fp);
                                    },
                                 function (error) {
                                     //Download abort errors or download failed errors
                                     alert("download error source " + error.code);
                                     //alert("download error target " + error.target);
                                     //alert("upload error code" + error.code);
                                 }
                            );
            }

            function show(fileToShow) {
                //window.open(fileToShow, '_system', 'location=yes');
                window.plugins.fileOpener.open(encodeURI(fileToShow));
            }
        },
        showPDF: function () {
            window.plugins.fileOpener.open(encodeURI(localStorage.getItem("filePath")));
        },
        clientList: function () {
            var client = JSON.parse(localStorage.getItem("clientList"));
            localStorage.setItem("clientList");
            return client;
        },
        scope_to_storage: function (lst, scp) {
            localStorage.setItem(lst, scp);
        },
        newsParser: function () {
            var items_tags = new Array;
            var xmlhttp = new XMLHttpRequest();
            xmlhttp.open("GET", "http://g1.globo.com/dynamo/economia/rss2.xml", false);
            xmlhttp.send();
            var doc = xmlhttp.responseXML;
            var x = doc.getElementsByTagName("item");
            var linkd;
            var title;
            var img;
            var pubDate;
            var id;
            for (i = 0; i < x.length; i++) {
                id = i;
                linkd = x[i].getElementsByTagName("link")[0].childNodes[0].nodeValue;
                title = x[i].getElementsByTagName("title")[0].childNodes[0].nodeValue;
                img = "http://g1.globo.com/Portal/globonoticias/img/tit_header_rss.jpg";
                pubDate = x[i].getElementsByTagName("pubDate")[0].childNodes[0].nodeValue;
                var tags = new Tags(id, title, linkd, img, pubDate);
                items_tags.push(tags);
            }
            return items_tags;
        }
    }
})



