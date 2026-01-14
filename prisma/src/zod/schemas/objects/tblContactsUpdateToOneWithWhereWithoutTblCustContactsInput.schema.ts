import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblContactsWhereInputObjectSchema as tblContactsWhereInputObjectSchema } from './tblContactsWhereInput.schema';
import { tblContactsUpdateWithoutTblCustContactsInputObjectSchema as tblContactsUpdateWithoutTblCustContactsInputObjectSchema } from './tblContactsUpdateWithoutTblCustContactsInput.schema';
import { tblContactsUncheckedUpdateWithoutTblCustContactsInputObjectSchema as tblContactsUncheckedUpdateWithoutTblCustContactsInputObjectSchema } from './tblContactsUncheckedUpdateWithoutTblCustContactsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblContactsWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => tblContactsUpdateWithoutTblCustContactsInputObjectSchema), z.lazy(() => tblContactsUncheckedUpdateWithoutTblCustContactsInputObjectSchema)])
}).strict();
export const tblContactsUpdateToOneWithWhereWithoutTblCustContactsInputObjectSchema: z.ZodType<Prisma.tblContactsUpdateToOneWithWhereWithoutTblCustContactsInput> = makeSchema() as unknown as z.ZodType<Prisma.tblContactsUpdateToOneWithWhereWithoutTblCustContactsInput>;
export const tblContactsUpdateToOneWithWhereWithoutTblCustContactsInputObjectZodSchema = makeSchema();
