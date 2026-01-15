import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblCustContactsWhereUniqueInputObjectSchema as tblCustContactsWhereUniqueInputObjectSchema } from './tblCustContactsWhereUniqueInput.schema';
import { tblCustContactsUpdateWithoutContactInputObjectSchema as tblCustContactsUpdateWithoutContactInputObjectSchema } from './tblCustContactsUpdateWithoutContactInput.schema';
import { tblCustContactsUncheckedUpdateWithoutContactInputObjectSchema as tblCustContactsUncheckedUpdateWithoutContactInputObjectSchema } from './tblCustContactsUncheckedUpdateWithoutContactInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblCustContactsWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => tblCustContactsUpdateWithoutContactInputObjectSchema), z.lazy(() => tblCustContactsUncheckedUpdateWithoutContactInputObjectSchema)])
}).strict();
export const tblCustContactsUpdateWithWhereUniqueWithoutContactInputObjectSchema: z.ZodType<Prisma.tblCustContactsUpdateWithWhereUniqueWithoutContactInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustContactsUpdateWithWhereUniqueWithoutContactInput>;
export const tblCustContactsUpdateWithWhereUniqueWithoutContactInputObjectZodSchema = makeSchema();
