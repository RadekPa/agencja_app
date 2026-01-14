import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblCustomersWhereInputObjectSchema as tblCustomersWhereInputObjectSchema } from './tblCustomersWhereInput.schema';
import { tblCustomersUpdateWithoutTblCustContactsInputObjectSchema as tblCustomersUpdateWithoutTblCustContactsInputObjectSchema } from './tblCustomersUpdateWithoutTblCustContactsInput.schema';
import { tblCustomersUncheckedUpdateWithoutTblCustContactsInputObjectSchema as tblCustomersUncheckedUpdateWithoutTblCustContactsInputObjectSchema } from './tblCustomersUncheckedUpdateWithoutTblCustContactsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblCustomersWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => tblCustomersUpdateWithoutTblCustContactsInputObjectSchema), z.lazy(() => tblCustomersUncheckedUpdateWithoutTblCustContactsInputObjectSchema)])
}).strict();
export const tblCustomersUpdateToOneWithWhereWithoutTblCustContactsInputObjectSchema: z.ZodType<Prisma.tblCustomersUpdateToOneWithWhereWithoutTblCustContactsInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustomersUpdateToOneWithWhereWithoutTblCustContactsInput>;
export const tblCustomersUpdateToOneWithWhereWithoutTblCustContactsInputObjectZodSchema = makeSchema();
