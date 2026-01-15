import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblCustContactsScalarWhereInputObjectSchema as tblCustContactsScalarWhereInputObjectSchema } from './tblCustContactsScalarWhereInput.schema';
import { tblCustContactsUpdateManyMutationInputObjectSchema as tblCustContactsUpdateManyMutationInputObjectSchema } from './tblCustContactsUpdateManyMutationInput.schema';
import { tblCustContactsUncheckedUpdateManyWithoutContactInputObjectSchema as tblCustContactsUncheckedUpdateManyWithoutContactInputObjectSchema } from './tblCustContactsUncheckedUpdateManyWithoutContactInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblCustContactsScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => tblCustContactsUpdateManyMutationInputObjectSchema), z.lazy(() => tblCustContactsUncheckedUpdateManyWithoutContactInputObjectSchema)])
}).strict();
export const tblCustContactsUpdateManyWithWhereWithoutContactInputObjectSchema: z.ZodType<Prisma.tblCustContactsUpdateManyWithWhereWithoutContactInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustContactsUpdateManyWithWhereWithoutContactInput>;
export const tblCustContactsUpdateManyWithWhereWithoutContactInputObjectZodSchema = makeSchema();
