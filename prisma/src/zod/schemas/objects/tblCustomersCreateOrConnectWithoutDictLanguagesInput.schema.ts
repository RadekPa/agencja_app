import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblCustomersWhereUniqueInputObjectSchema as tblCustomersWhereUniqueInputObjectSchema } from './tblCustomersWhereUniqueInput.schema';
import { tblCustomersCreateWithoutDictLanguagesInputObjectSchema as tblCustomersCreateWithoutDictLanguagesInputObjectSchema } from './tblCustomersCreateWithoutDictLanguagesInput.schema';
import { tblCustomersUncheckedCreateWithoutDictLanguagesInputObjectSchema as tblCustomersUncheckedCreateWithoutDictLanguagesInputObjectSchema } from './tblCustomersUncheckedCreateWithoutDictLanguagesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblCustomersWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => tblCustomersCreateWithoutDictLanguagesInputObjectSchema), z.lazy(() => tblCustomersUncheckedCreateWithoutDictLanguagesInputObjectSchema)])
}).strict();
export const tblCustomersCreateOrConnectWithoutDictLanguagesInputObjectSchema: z.ZodType<Prisma.tblCustomersCreateOrConnectWithoutDictLanguagesInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustomersCreateOrConnectWithoutDictLanguagesInput>;
export const tblCustomersCreateOrConnectWithoutDictLanguagesInputObjectZodSchema = makeSchema();
