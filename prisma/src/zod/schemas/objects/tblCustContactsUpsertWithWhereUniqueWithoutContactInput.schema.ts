import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblCustContactsWhereUniqueInputObjectSchema as tblCustContactsWhereUniqueInputObjectSchema } from './tblCustContactsWhereUniqueInput.schema';
import { tblCustContactsUpdateWithoutContactInputObjectSchema as tblCustContactsUpdateWithoutContactInputObjectSchema } from './tblCustContactsUpdateWithoutContactInput.schema';
import { tblCustContactsUncheckedUpdateWithoutContactInputObjectSchema as tblCustContactsUncheckedUpdateWithoutContactInputObjectSchema } from './tblCustContactsUncheckedUpdateWithoutContactInput.schema';
import { tblCustContactsCreateWithoutContactInputObjectSchema as tblCustContactsCreateWithoutContactInputObjectSchema } from './tblCustContactsCreateWithoutContactInput.schema';
import { tblCustContactsUncheckedCreateWithoutContactInputObjectSchema as tblCustContactsUncheckedCreateWithoutContactInputObjectSchema } from './tblCustContactsUncheckedCreateWithoutContactInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblCustContactsWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => tblCustContactsUpdateWithoutContactInputObjectSchema), z.lazy(() => tblCustContactsUncheckedUpdateWithoutContactInputObjectSchema)]),
  create: z.union([z.lazy(() => tblCustContactsCreateWithoutContactInputObjectSchema), z.lazy(() => tblCustContactsUncheckedCreateWithoutContactInputObjectSchema)])
}).strict();
export const tblCustContactsUpsertWithWhereUniqueWithoutContactInputObjectSchema: z.ZodType<Prisma.tblCustContactsUpsertWithWhereUniqueWithoutContactInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustContactsUpsertWithWhereUniqueWithoutContactInput>;
export const tblCustContactsUpsertWithWhereUniqueWithoutContactInputObjectZodSchema = makeSchema();
