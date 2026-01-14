import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblCustomersWhereUniqueInputObjectSchema as tblCustomersWhereUniqueInputObjectSchema } from './tblCustomersWhereUniqueInput.schema';
import { tblCustomersUpdateWithoutDictLanguagesInputObjectSchema as tblCustomersUpdateWithoutDictLanguagesInputObjectSchema } from './tblCustomersUpdateWithoutDictLanguagesInput.schema';
import { tblCustomersUncheckedUpdateWithoutDictLanguagesInputObjectSchema as tblCustomersUncheckedUpdateWithoutDictLanguagesInputObjectSchema } from './tblCustomersUncheckedUpdateWithoutDictLanguagesInput.schema';
import { tblCustomersCreateWithoutDictLanguagesInputObjectSchema as tblCustomersCreateWithoutDictLanguagesInputObjectSchema } from './tblCustomersCreateWithoutDictLanguagesInput.schema';
import { tblCustomersUncheckedCreateWithoutDictLanguagesInputObjectSchema as tblCustomersUncheckedCreateWithoutDictLanguagesInputObjectSchema } from './tblCustomersUncheckedCreateWithoutDictLanguagesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblCustomersWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => tblCustomersUpdateWithoutDictLanguagesInputObjectSchema), z.lazy(() => tblCustomersUncheckedUpdateWithoutDictLanguagesInputObjectSchema)]),
  create: z.union([z.lazy(() => tblCustomersCreateWithoutDictLanguagesInputObjectSchema), z.lazy(() => tblCustomersUncheckedCreateWithoutDictLanguagesInputObjectSchema)])
}).strict();
export const tblCustomersUpsertWithWhereUniqueWithoutDictLanguagesInputObjectSchema: z.ZodType<Prisma.tblCustomersUpsertWithWhereUniqueWithoutDictLanguagesInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustomersUpsertWithWhereUniqueWithoutDictLanguagesInput>;
export const tblCustomersUpsertWithWhereUniqueWithoutDictLanguagesInputObjectZodSchema = makeSchema();
