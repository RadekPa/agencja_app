import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblPubISBNScalarWhereInputObjectSchema as tblPubISBNScalarWhereInputObjectSchema } from './tblPubISBNScalarWhereInput.schema';
import { tblPubISBNUpdateManyMutationInputObjectSchema as tblPubISBNUpdateManyMutationInputObjectSchema } from './tblPubISBNUpdateManyMutationInput.schema';
import { tblPubISBNUncheckedUpdateManyWithoutTblPublishersInputObjectSchema as tblPubISBNUncheckedUpdateManyWithoutTblPublishersInputObjectSchema } from './tblPubISBNUncheckedUpdateManyWithoutTblPublishersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblPubISBNScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => tblPubISBNUpdateManyMutationInputObjectSchema), z.lazy(() => tblPubISBNUncheckedUpdateManyWithoutTblPublishersInputObjectSchema)])
}).strict();
export const tblPubISBNUpdateManyWithWhereWithoutTblPublishersInputObjectSchema: z.ZodType<Prisma.tblPubISBNUpdateManyWithWhereWithoutTblPublishersInput> = makeSchema() as unknown as z.ZodType<Prisma.tblPubISBNUpdateManyWithWhereWithoutTblPublishersInput>;
export const tblPubISBNUpdateManyWithWhereWithoutTblPublishersInputObjectZodSchema = makeSchema();
