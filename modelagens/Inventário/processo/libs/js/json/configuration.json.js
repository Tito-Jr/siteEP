Bizagi.AppModel = {"personalized":false,"userLogoName":"\\libs\\img\\biz-ex-logo.png","bizagiUrl":"http://www.bizagi.com","productName":"Bizagi Modeler","modelName":"Inventário","publishDate":"20/09/2024 20:23:09","pages":[{"id":"0d98c414-38a5-4d4c-87ca-cb5f87191bc3","name":"Inventário","version":"1.0","author":"70748989455","image":"files\\diagrams\\Inventario.svg","isSubprocessPage":false,"isCallActivityPage":false,"properties":[],"elements":[{"id":"55e2f51d-22b0-4f96-beca-2711e43a7420","name":"Inventário","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":16.0,"y":16.0}],"radius":0.0,"height":463.0,"width":50.0,"shape":"rect"},"elementType":"Participant","elementSubType":"Participant","properties":[],"pageElements":[{"id":"7c2a281d-d780-441c-835d-7c10a490d895","name":"Setor Financeiro","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\LinkIntermediate_Catch.png","imageBounds":{"points":[{"x":853.0,"y":361.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"pageElementRef":"0d4bd621-d98a-4096-a7e1-6901cf62fd59","elementType":"LinkIntermediate","elementSubType":"IntermediateCatchEvent"},{"id":"0d4bd621-d98a-4096-a7e1-6901cf62fd59","name":"Setor Financeiro","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\LinkIntermediate_Throw.png","imageBounds":{"points":[{"x":1265.0,"y":85.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"pageElementRef":"7c2a281d-d780-441c-835d-7c10a490d895","elementType":"LinkIntermediate","elementSubType":"IntermediateThrowEvent"},{"id":"65b5b1bd-44f1-4d54-94c6-d6b7bc6cf080","name":"Solicitar portaria","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:11pt;font-weight:normal;font-style:normal;\">O Gerente do Patrim&ocirc;nio solicita a portaria &agrave; Coordenadora Administrativa, que solicitar&aacute; &agrave; PRODEP. A validade da portaria vai depender, podendo ser at&eacute; de 2 anos.</span></p>","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\SendTask.png","imageBounds":{"points":[{"x":158.0,"y":65.0}],"radius":0.0,"height":70.0,"width":100.0,"shape":"rect"},"elementType":"SendTask","elementSubType":"SendTask","properties":[{"id":"SendTaskImplementation","name":"Implementação","value":"Serviço Web","type":"text"}]},{"id":"63807a1d-949d-4d5e-b4c3-a5bbd9678f3b","name":"Criar Portaria","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:11pt;font-weight:normal;font-style:normal;\">A portaria &eacute; formada por um Presidente e mais tr&ecirc;s membros do patrim&ocirc;nio.</span></p>","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\UserTask.png","imageBounds":{"points":[{"x":158.0,"y":213.0}],"radius":0.0,"height":70.0,"width":100.0,"shape":"rect"},"elementType":"UserTask","elementSubType":"UserTask","properties":[]},{"id":"3dac0985-08bd-4b9f-9576-4e0d3c2b8fbb","name":"Mandar cópia da portaria via SEI","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\SendTask.png","imageBounds":{"points":[{"x":294.0,"y":213.0}],"radius":0.0,"height":70.0,"width":100.0,"shape":"rect"},"elementType":"SendTask","elementSubType":"SendTask","properties":[{"id":"SendTaskImplementation","name":"Implementação","value":"Serviço Web","type":"text"}]},{"id":"f6a16701-cdb0-4d48-88b8-2a3242ed88c8","name":"Receber cópia da portaria","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\ReceiveTask.png","imageBounds":{"points":[{"x":294.0,"y":65.0}],"radius":0.0,"height":70.0,"width":100.0,"shape":"rect"},"elementType":"ReceiveTask","elementSubType":"ReceiveTask","properties":[{"id":"ReceiveTaskImplementation","name":"Implementação","value":"Serviço Web","type":"text"}]},{"id":"28aa1743-1fff-4ce5-83ef-1ee083a92408","name":"Realizar esboço dos bens móveis","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:11pt;font-weight:normal;font-style:normal;\">Os membros do patrim&ocirc;nio s&atilde;o atribu&iacute;dos para realizar o levantamento dos bens em todos os setores da Reitoria.</span></p>","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\UserTask.png","imageBounds":{"points":[{"x":547.0,"y":65.0}],"radius":0.0,"height":70.0,"width":100.0,"shape":"rect"},"elementType":"UserTask","elementSubType":"UserTask","properties":[]},{"id":"130d90c0-2223-42d7-b82a-b605bf69cfb5","name":"Registrar informações na planilha do PE INTEGRADO","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:11pt;font-weight:normal;font-style:normal;\">S&atilde;o registrados os n&uacute;meros de tombamento, descri&ccedil;&atilde;o dos equipamentos e quantidade.</span></p>","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\ScriptTask.png","imageBounds":{"points":[{"x":808.0,"y":65.0}],"radius":0.0,"height":70.0,"width":100.0,"shape":"rect"},"elementType":"ScriptTask","elementSubType":"ScriptTask","properties":[]},{"id":"c12cdbbb-c170-4d93-b020-b3b594f56595","name":"   Enviar planilha para setor Financeiro e SAD","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\SendTask.png","imageBounds":{"points":[{"x":930.0,"y":65.0}],"radius":0.0,"height":70.0,"width":100.0,"shape":"rect"},"elementType":"SendTask","elementSubType":"SendTask","properties":[{"id":"SendTaskImplementation","name":"Implementação","value":"Serviço Web","type":"text"}]},{"id":"50acffbe-eb4d-4c88-a1c6-82611169c138","name":" Realizar o balanço","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:11pt;font-weight:normal;font-style:normal;\">O Setor Financeiro realiza o balan&ccedil;o e confere se as informa&ccedil;&otilde;es recebidas pelo patrim&ocirc;nio est&atilde;o batendo.</span></p>","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\UserTask.png","imageBounds":{"points":[{"x":930.0,"y":341.0}],"radius":0.0,"height":70.0,"width":100.0,"shape":"rect"},"elementType":"UserTask","elementSubType":"UserTask","properties":[]},{"id":"ea132783-14f0-43c5-810b-cb7877c4d0bc","name":"Verificar divergências e solicitar informações faltantes","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:11pt;font-weight:normal;font-style:normal;\">Caso haja alguma diverg&ecirc;ncia no valor, &eacute; solicitado ao patrim&ocirc;nio que envie as informa&ccedil;&otilde;es faltantes.</span></p>","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\SendTask.png","imageBounds":{"points":[{"x":1134.0,"y":341.0}],"radius":0.0,"height":70.0,"width":100.0,"shape":"rect"},"elementType":"SendTask","elementSubType":"SendTask","properties":[{"id":"SendTaskImplementation","name":"Implementação","value":"Serviço Web","type":"text"}]},{"id":"7466fd1e-b7b6-4e3d-a188-1c084b8dcdb0","name":"Enviar informações faltantes","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\SendTask.png","imageBounds":{"points":[{"x":1134.0,"y":65.0}],"radius":0.0,"height":70.0,"width":100.0,"shape":"rect"},"elementType":"SendTask","elementSubType":"SendTask","properties":[{"id":"SendTaskImplementation","name":"Implementação","value":"Serviço Web","type":"text"}]}]}],"subPages":[]}],"texts":{"tableOfContents":"Índice","pageNumber":"Página","pageNumberLabelOf":"de","version":"Versão","author":"Autor","description":"Descrição","mainPool":"Processo principal","mainPoolDescription":"Processo principal Descrição","processDiagrams":"Processar os Diagramas","processElements":"Elementos do processo","elements":"Elementos do processo","defaultElementName":"Elemento","performers":"Executantes","accountable":"Responsável","consulted":"Consultado","informed":"Informado","connectors":"Conectores","connector":"Conector","home":"Principal","search":"Pesquisar","goToParentProcess":"Ir para Matriz","calledBy":"Chamada por","attachmentsTooltip":"Exibir anexos","visitBizagi":"Visite bizagi.com","contains":"Contém {0} subprocessos","showAll":"Mostrar tudo","fullScreen":"Tela inteira","zoomIn":"Ampliar","zoomOut":"Reduzir","close":"Fechar","menu":"Menu: ","errorPage":"Erro ao visualizar a página","process":"Processo","subProcess":"Subprocessos publicados","contain":"Contém","checkAttributes":"Ver atributos","checkOverview":"Ver resumo","unavailableResource":"O recurso não está disponível","localResource":"O recurso pode ser acessado localmente","performer":"Participantes","linktoimage":"Link para a  imagem","presentationAction":"Ações de apresentação","searchGlobal":"Busca todos","searchLocal":"Busca neste processo","searchResults":"Nenhum resultado encontrado","titlePage":"Início","emptyElement":"Este elemento ainda não foi documentado","unsupported":"Seu navegador não suporta conteúdo exibido por esta página. <br> Recomendamos que você atualizar o seu navegador.","details":"Detalhes","viewDetails":"Ver detalhes","expand":"Expandir","mainPoolProperties":"Propriedades do Processo principal","cannotVisualize":"A página não pode ser exibida","resourceNotFound":"O recurso solicitado não foi encontrado:","applyTheme":"Aplicando novo tema","showMore":"Mostrar mais","showLess":"Mostrar menos","hideDescription":"Ocultar descrição","showDescription":"Mostrar descrição","presentationActionLink":"Exibir ações de apresentação","goToLinkThrow":"Ir para o evento de destino","goToLinkCatch":"Ir para o evento de origem","goToSubProcess":"Ir para o subprocesso","viewByList":"Lista de processos","viewByTree":"Hierarquia de processos","diagramList":"Lista de processos","folderTree":"Hierarquia de processos"},"searchMap":[{"containerId":"0d98c414-38a5-4d4c-87ca-cb5f87191bc3","containerName":"Inventário","isSubprocess":false,"elements":[{"id":"55e2f51d-22b0-4f96-beca-2711e43a7420","value":"Inventário"},{"id":"429779d8-8ba4-4812-86cd-65e96a456344","value":"Patrimônio"},{"id":"e163d38a-989a-40d3-b00b-60416b53b447","value":"PRODEP"},{"id":"bb785d34-4ca2-4990-a801-3c35984fc162","value":"Setor Financeiro"},{"id":"e604b535-34eb-413c-b0ea-a3d5caaf99ab","value":""},{"id":"528a1722-6fec-4e70-8584-f08722620beb","value":"Tudo ok?"},{"id":"0aa82bb5-40da-4119-95b7-85c207456b03","value":""},{"id":"65b5b1bd-44f1-4d54-94c6-d6b7bc6cf080","value":"Solicitar portaria"},{"id":"63807a1d-949d-4d5e-b4c3-a5bbd9678f3b","value":"Criar Portaria"},{"id":"3dac0985-08bd-4b9f-9576-4e0d3c2b8fbb","value":"Mandar cópia da portaria via SEI"},{"id":"f6a16701-cdb0-4d48-88b8-2a3242ed88c8","value":"Receber cópia da portaria"},{"id":"35604dbc-7df8-4ae1-93cd-801668711e2e","value":"Distribuir tarefas para Presidente e membros da comissão"},{"id":"f36c5e81-2ae6-4f01-8d07-fa28d512ec22","value":"Contar bens móveis"},{"id":"130d90c0-2223-42d7-b82a-b605bf69cfb5","value":"Registrar informações na planilha do PE INTEGRADO"},{"id":"c12cdbbb-c170-4d93-b020-b3b594f56595","value":"   Enviar planilha para setor Financeiro e SAD"},{"id":"50acffbe-eb4d-4c88-a1c6-82611169c138","value":" Realizar o balanço"},{"id":"ea132783-14f0-43c5-810b-cb7877c4d0bc","value":"Verificar divergências e solicitar informações faltantes"},{"id":"7466fd1e-b7b6-4e3d-a188-1c084b8dcdb0","value":"Enviar informações faltantes"},{"id":"28aa1743-1fff-4ce5-83ef-1ee083a92408","value":"Realizar esboço dos bens móveis"},{"id":"0d4bd621-d98a-4096-a7e1-6901cf62fd59","value":"Setor Financeiro"},{"id":"7c2a281d-d780-441c-835d-7c10a490d895","value":"Setor Financeiro"},{"id":"a5079f5a-6b6d-4b46-8932-17f90cf6b849"}]}]}