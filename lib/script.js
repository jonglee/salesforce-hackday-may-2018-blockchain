/**
 * @param {org.blockchain.mynetwork.PublishCourtRecord} tx The published transaction instance
 * @transaction
 */
function publishCourtRecord(tx) {
    var event = getFactory().newEvent('org.blockchain.mynetwork', 'PublishedEvent');
    event.courtRecordId = tx.courtRecord.courtRecordId;
    event.individualId = tx.courtRecord.owner.individualId;
    event.description = tx.courtRecord.description;
    emit(event);
  }