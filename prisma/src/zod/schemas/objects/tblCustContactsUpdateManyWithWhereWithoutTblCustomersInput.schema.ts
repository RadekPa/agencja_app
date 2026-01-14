import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblCustContactsScalarWhereInputObjectSchema as tblCustContactsScalarWhereInputObjectSchema } from './tblCustContactsScalarWhereInput.schema';
import { tblCustContactsUpdateManyMutationInputObjectSchema as tblCustContactsUpdateManyMutationInputObjectSchema } from './tblCustContactsUpdateManyMutationInput.schema';
import { tblCustContactsUncheckedUpdateManyWithoutTblCustomersInputObjectSchema as tblCustContactsUncheckedUpdateManyWithoutTblCustomersInputObjectSchema } from './tblCustContactsUncheckedUpdateManyWithoutTblCustomersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblCustContactsScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => tblCustContactsUpdateManyMutationInputObjectSchema), z.lazy(() => tblCustContactsUncheckedUpdateManyWithoutTblCustomersInputObjectSchema)])
}).strict();
export const tblCustContactsUpdateManyWithWhereWithoutTblCustomersInputObjectSchema: z.ZodType<Prisma.tblCustContactsUpdateManyWithWhereWithoutTblCustomersInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustContactsUpdateManyWithWhereWithoutTblCustomersInput>;
export const tblCustContactsUpdateManyWithWhereWithoutTblCustomersInputObjectZodSchema = makeSchema();
