import com.itextpdf.kernel.font.PdfFontFactory
import com.itextpdf.kernel.pdf.PdfDocument
import com.itextpdf.kernel.pdf.PdfWriter
import com.itextpdf.layout.Document
import com.itextpdf.layout.element.Paragraph

fun main() {
    // Lista de pessoas na sala de rádio
    val pessoasRadio = listOf("Pessoa1", "Pessoa2", "Pessoa3", "Pessoa4", "Pessoa5")
    
    // Lista de pessoas na sala de telefone
    val pessoasTelefone = listOf(
        "Pessoa6", "Pessoa7", "Pessoa8", "Pessoa9", "Pessoa10",
        "Pessoa11", "Pessoa12", "Pessoa13", "Pessoa14", "Pessoa15"
    )

    // Chamada para a sala de rádio
    fazerChamada("Radio", pessoasRadio)

    // Chamada para a sala de telefone
    fazerChamada("Telefone", pessoasTelefone)
}

fun fazerChamada(sala: String, pessoas: List<String>) {
    println("Chamada para a sala $sala:")
    for ((index, pessoa) in pessoas.withIndex()) {
        println("${index + 1}. $pessoa")
    }

    // Gerar PDF da chamada
    gerarPDF(sala, pessoas)
}

fun gerarPDF(sala: String, pessoas: List<String>) {
    val fileName = "${sala}_Chamada.pdf"
    val writer = PdfWriter(fileName)
    val pdf = PdfDocument(writer)
    val document = Document(pdf)

    document.add(Paragraph("Chamada para a sala $sala:"))

    for ((index, pessoa) in pessoas.withIndex()) {
        document.add(Paragraph("${index + 1}. $pessoa"))
    }

    document.close()
    println("PDF da chamada para a sala $sala gerado com sucesso.")
}
