const IncensePrayersSequence = [
    Prefix.commonIncense + "EleysonImas&D=$copticFeasts.AnyDay",
    Prefix.commonIncense + "CymbalVersesPlaceHolder&D=$copticFeasts.AnyDay",
    Prefix.commonIncense + "LitaniesComment1&D=$copticFeasts.AnyDay",
    Prefix.incenseDawn + "SickPrayer&D=$copticFeasts.AnyDay",
    Prefix.incenseDawn + "TravelersPrayer&D=$copticFeasts.AnyDay",
    Prefix.incenseDawn + "OblationsPrayer&D=$copticFeasts.AnyDay",
    Prefix.incenseVespers + "DepartedPrayer&D=$copticFeasts.AnyDay",
    Prefix.commonIncense + "DoxolgiesComment&D=$copticFeasts.AnyDay",
    Prefix.commonPrayer + "AngelsPrayer&D=$copticFeasts.AnyDay",
    Prefix.incenseVespers + "LordKeepUsThisNightWithoutSin&D=$copticFeasts.AnyDay",
    Prefix.commonPrayer + "Agios&D=$copticFeasts.AnyDay&D=$copticFeasts.AnyDay",
    Prefix.commonPrayer + "OurFatherWhoArtInHeaven&D=$copticFeasts.AnyDay",
    Prefix.commonPrayer + "WeSaluteYouMary&D=$copticFeasts.AnyDay",
    Prefix.commonIncense + "DoxologiesPlaceHolder&D=$copticFeasts.AnyDay",
    Prefix.commonPrayer + "WeExaltYouStMary&D=$copticFeasts.AnyDay",
    Prefix.commonPrayer + "Creed&D=$copticFeasts.AnyDay",
    Prefix.commonPrayer + "EfnotiNaynan&D=$copticFeasts.AnyDay",
    Prefix.commonPrayer + "GospelPrayerPlaceHolder&D=$copticFeasts.AnyDay",
    Prefix.commonPrayer + "OurFatherWhoArtInHeaven&D=$copticFeasts.AnyDay",
    Prefix.commonPrayer + "GospelLitanyComment4&D=$copticFeasts.AnyDay",
    Prefix.commonPrayer + "BlockInTheNameOfOurLord&D=$copticFeasts.AnyDay",
    Prefix.commonPrayer + "GospelLitanyComment5&D=$copticFeasts.AnyDay",
    Prefix.commonPrayer + "BlockIriniPassi&D=$copticFeasts.AnyDay",
    Prefix.commonPrayer + "AbsolutionForTheSon&D=$copticFeasts.AnyDay",
    Prefix.commonIncense + "LiturgyEnd&D=$copticFeasts.AnyDay"
]; //    this is the generic sequence of all prayers for incense dawn and incense vespers. The onClick function triggered by btnIncenseDawn and btnIncenseVespers, will remove what is irrelevant and add what needs to be added according to whether it is a Dawn or Vespers office
const MassPrayersSequences = {
    //those are the sequences of the 'Baptized' mass prayers (starting from Reconciliation) for each mass
    MassUnbaptized: [
        Prefix.massCommon + "GloryAndHonor&D=$copticFeasts.AnyDay",
        Prefix.massCommon + "HallelujahFayBiBi&D=$copticFeasts.AnyDay",
        Prefix.massCommon + "HallelujahFayBiBiFast&D=$copticFeasts.AnyDay",
        Prefix.massCommon + "BenedictionOfTheLamb&D=$copticFeasts.AnyDay",
        Prefix.commonPrayer + "ThanksGiving&D=$copticFeasts.AnyDay",
        Prefix.massCommon + "AbsolutionForTheFather&D=$copticFeasts.AnyDay",
        Prefix.massCommon + "Tayshoury&D=$copticFeasts.AnyDay",
        Prefix.massCommon + "Tishoury&D=$copticFeasts.AnyDay",
        Prefix.massCommon + "IntercessionsHymn&D=$copticFeasts.AnyDay",
        Prefix.massCommon + 'ReadingsPlaceHolder&D=$copticFeasts.AnyDay',
        Prefix.commonPrayer + "GospelPrayerPlaceHolder&D=$copticFeasts.AnyDay",
        Prefix.commonPrayer + "Creed&D=$copticFeasts.AnyDay"
    ],
    MassStBasil: [
        Prefix.massCommon + "ReconciliationComment&D=$copticFeasts.AnyDay",
        Prefix.massStBasil + "Reconciliation&D=$copticFeasts.AnyDay",
        Prefix.massCommon + "EndOfReconciliation&D=$copticFeasts.AnyDay",
        Prefix.massStBasil + "Anaphora&D=$copticFeasts.AnyDay",
        Prefix.massStBasil + "Agios&D=$copticFeasts.AnyDay",
        Prefix.massStBasil + "InstitutionNarrative&D=$copticFeasts.AnyDay",
        Prefix.massCommon + "AsWeAlsoCommemorateHisHolyPassionPart1&D=$copticFeasts.AnyDay",
    ],
    MassStGregory: [
        Prefix.massCommon + "ReconciliationComment&D=$copticFeasts.AnyDay",
        Prefix.massStGregory + "Reconciliation&D=$copticFeasts.AnyDay",
        Prefix.massCommon + "EndOfReconciliation&D=$copticFeasts.AnyDay",
        Prefix.massStGregory + "Anaphora&D=$copticFeasts.AnyDay",
        Prefix.massStGregory + "Agios&D=$copticFeasts.AnyDay",
        Prefix.massStGregory + "AsWeCommemorateYourHolyPassionPart1&D=$copticFeasts.AnyDay",
        Prefix.massStGregory + "CallOfTheHolySpiritPart1&D=$copticFeasts.AnyDay",
        Prefix.massStGregory + "LitaniesIntroduction&D=$copticFeasts.AnyDay",
        Prefix.massStGregory + "Litanies&D=$copticFeasts.AnyDay",
        Prefix.massStGregory + "FractionIntroduction&D=$copticFeasts.AnyDay"
    ],
    MassStCyril: [
        Prefix.massCommon + "ReconciliationComment&D=$copticFeasts.AnyDay",
        Prefix.massStCyril + "Reconciliation&D=$copticFeasts.AnyDay",
        Prefix.massCommon + "EndOfReconciliation&D=$copticFeasts.AnyDay",
        Prefix.massStCyril + "Anaphora&D=$copticFeasts.AnyDay",
        Prefix.massStCyril + "Agios&D=$copticFeasts.AnyDay",
        Prefix.massStCyril + "Part8&D=$copticFeasts.AnyDay",
        Prefix.massStCyril + "Part9&D=$copticFeasts.AnyDay",
        Prefix.massStCyril + "Part10&D=$copticFeasts.AnyDay",
        Prefix.massStCyril + "LitaniesIntroduction&D=$copticFeasts.AnyDay",
    ],
    MassStJohn: [],
    MassCallOfHolySpirit: [
        Prefix.massCommon + "CallOfTheHolySpiritPart1&D=$copticFeasts.AnyDay",
    ],
    MassLitanies: [
        Prefix.massCommon + "LitaniesIntroduction&D=$copticFeasts.AnyDay",
        Prefix.massCommon + "SaintsCommemoration&D=$copticFeasts.AnyDay",
        Prefix.massCommon + "CommemorationOfTheDeparted&D=$copticFeasts.AnyDay",
        Prefix.massCommon + "FractionIntroduction&D=$copticFeasts.AnyDay",
        Prefix.commonPrayer + "OurFatherWhoArtInHeaven&D=$copticFeasts.AnyDay",
        Prefix.commonPrayer + "BlockInTheNameOfOurLord&D=$copticFeasts.AnyDay",
        Prefix.massCommon + "PrayerForTheFather&D=$copticFeasts.AnyDay",
        Prefix.commonPrayer + "BlockIriniPassi&D=$copticFeasts.AnyDay",
        Prefix.massCommon + "AbsolutionPrayerForTheFather&D=$copticFeasts.AnyDay",
        Prefix.massCommon + "ConfessionIntroduction&D=$copticFeasts.AnyDay",
        Prefix.massCommon + "Confession&D=$copticFeasts.AnyDay",
        Prefix.commonPrayer + "ZoksasiKyrie&D=$copticFeasts.AnyDay"
    ],
    Communion: [
        Prefix.massCommon + "CommunionPsalm150&D=$copticFeasts.AnyDay",
        Prefix.massCommon + "LiturgyEnd&D=$copticFeasts.AnyDay",
    ], //the sequence of prayers from 'Confession' until the end of the mass, it is common to all masses 
};
const PsalmodyPrayersSequences = {
    PsalmodyYear: [
        Prefix.psalmody + "WakeUpSonsOfLight&D=$Seasons.KiahkWeek1||$Seasons.KiahkWeek2",
        Prefix.psalmody + "PsalyOnFirstHos&D=$Seasons.KiahkWeek1||$Seasons.KiahkWeek2||$copticFeasts.AnyDay"
    ],
    PsalmodyKiahk: [
        Prefix.psalmody + "WakeUpSonsOfLight&D=$Seasons.KiahkWeek1||$Seasons.KiahkWeek2",
        Prefix.psalmody + "KiahkHos&D=$Seasons.KiahkWeek1||Seasons.KiahkWeek2",
        Prefix.psalmody + "ChantAgiosOsiOs&D=$Seasons.KiahkWeek1||Seasons.KiahkWeek2",
        Prefix.psalmody + "EpsalyOnFirstHos&D=$Seasons.KiahkWeek1||$Seasons.KiahkWeek2||$copticFeasts.AnyDay",
        Prefix.psalmody + "FirstHos&D=$copticFeasts.AnyDay||$Seasons.KiahkWeek1||$Seasons.KiahkWeek2",
        Prefix.psalmody + "LobshFirstHos&D=$copticFeasts.AnyDay||$Seasons.KiahkWeek1||$Seasons.KiahkWeek2",
        Prefix.psalmody + "ChantGodSaidToMoses&D=$copticFeasts.AnyDay||$Seasons.KiahkWeek1||$Seasons.KiahkWeek2",
        Prefix.psalmody + "CommentaryOnHos1&D=$copticFeasts.AnyDay||$Seasons.KiahkWeek1||Seasons.KiahkWeek2",
        Prefix.psalmody + "PsalyOnSecondHos&D=$Seasons.KiahkWeek1||$Seasons.KiahkWeek2||$copticFeasts.AnyDay",
        Prefix.psalmody + "SecondHos&D=$copticFeasts.AnyDay||$Seasons.KiahkWeek1||$Seasons.KiahkWeek2",
        Prefix.psalmody + "LobshSecondHos&D=$copticFeasts.AnyDay||$Seasons.KiahkWeek1||$Seasons.KiahkWeek2",
        Prefix.psalmody + "ChantLetsSingWithDavid&D=$copticFeasts.AnyDay||$Seasons.KiahkWeek1||$Seasons.KiahkWeek2",
    ],
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGVjbGFyZVByYXllcnNTZXF1ZW5jZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9tb2R1bGVzL0RlY2xhcmVQcmF5ZXJzU2VxdWVuY2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sc0JBQXNCLEdBQVk7SUFDcEMsTUFBTSxDQUFDLGFBQWEsR0FBRyxvQ0FBb0M7SUFDM0QsTUFBTSxDQUFDLGFBQWEsR0FBQyxnREFBZ0Q7SUFDckUsTUFBTSxDQUFDLGFBQWEsR0FBQyx5Q0FBeUM7SUFDOUQsTUFBTSxDQUFDLFdBQVcsR0FBQyxtQ0FBbUM7SUFDdEQsTUFBTSxDQUFDLFdBQVcsR0FBRyx3Q0FBd0M7SUFDN0QsTUFBTSxDQUFDLFdBQVcsR0FBRyx3Q0FBd0M7SUFDN0QsTUFBTSxDQUFDLGNBQWMsR0FBRyx1Q0FBdUM7SUFDL0QsTUFBTSxDQUFDLGFBQWEsR0FBQyx5Q0FBeUM7SUFDOUQsTUFBTSxDQUFDLFlBQVksR0FBQyxxQ0FBcUM7SUFDekQsTUFBTSxDQUFDLGNBQWMsR0FBQyxzREFBc0Q7SUFDNUUsTUFBTSxDQUFDLFlBQVksR0FBQyxxREFBcUQ7SUFDekUsTUFBTSxDQUFDLFlBQVksR0FBQyxnREFBZ0Q7SUFDcEUsTUFBTSxDQUFDLFlBQVksR0FBRyx3Q0FBd0M7SUFDOUQsTUFBTSxDQUFDLGFBQWEsR0FBQyw4Q0FBOEM7SUFDbkUsTUFBTSxDQUFDLFlBQVksR0FBQyx5Q0FBeUM7SUFDN0QsTUFBTSxDQUFDLFlBQVksR0FBQyw4QkFBOEI7SUFDbEQsTUFBTSxDQUFDLFlBQVksR0FBRyxxQ0FBcUM7SUFDM0QsTUFBTSxDQUFDLFlBQVksR0FBQyxnREFBZ0Q7SUFDcEUsTUFBTSxDQUFDLFlBQVksR0FBQyxnREFBZ0Q7SUFDcEUsTUFBTSxDQUFDLFlBQVksR0FBQyw2Q0FBNkM7SUFDakUsTUFBTSxDQUFDLFlBQVksR0FBQyxnREFBZ0Q7SUFDcEUsTUFBTSxDQUFDLFlBQVksR0FBQyw2Q0FBNkM7SUFDakUsTUFB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