import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblCustContactsScalarWhereInputObjectSchema as tblCustContactsScalarWhereInputObjectSchema } from './tblCustContactsScalarWhereInput.schema';
import { tblCustContactsUpdateManyMutationInputObjectSchema as tblCustContactsUpdateManyMutationInputObjectSchema } from './tblCustContactsUpdateManyMutationInput.schema';
import { tblCustContactsUncheckedUpdateManyWithoutTblContactsInputObjectSchema as tblCustContactsUncheckedUpdateManyWithoutTblContactsInputObjectSchema } from './tblCustContactsUncheckedUpdateManyWithoutTblContactsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblCustContactsScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => tblCustContactsUpdateManyMutationInputObjectSchema), z.lazy(() => tblCustContactsUncheckedUpdateManyWithoutTblContactsInputObjectSchema)])
}).strict();
export const tblCustContactsUpdateManyWithWhereWithoutTblContactsInputObjectSchema: z.ZodType<Prisma.tblCustContactsUpdateManyWithWhereWithoutTblContactsInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustContactsUpdateManyWithWhereWithoutTblContactsInput>;
export const tblCustContactsUpdateManyWithWhereWithoutTblContactsInputObjectZodSchema = makeSchema();
