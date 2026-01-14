import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblTitEventsWhereUniqueInputObjectSchema as tblTitEventsWhereUniqueInputObjectSchema } from './tblTitEventsWhereUniqueInput.schema';
import { tblTitEventsCreateWithoutDictCopyTypeInputObjectSchema as tblTitEventsCreateWithoutDictCopyTypeInputObjectSchema } from './tblTitEventsCreateWithoutDictCopyTypeInput.schema';
import { tblTitEventsUncheckedCreateWithoutDictCopyTypeInputObjectSchema as tblTitEventsUncheckedCreateWithoutDictCopyTypeInputObjectSchema } from './tblTitEventsUncheckedCreateWithoutDictCopyTypeInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblTitEventsWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => tblTitEventsCreateWithoutDictCopyTypeInputObjectSchema), z.lazy(() => tblTitEventsUncheckedCreateWithoutDictCopyTypeInputObjectSchema)])
}).strict();
export const tblTitEventsCreateOrConnectWithoutDictCopyTypeInputObjectSchema: z.ZodType<Prisma.tblTitEventsCreateOrConnectWithoutDictCopyTypeInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitEventsCreateOrConnectWithoutDictCopyTypeInput>;
export const tblTitEventsCreateOrConnectWithoutDictCopyTypeInputObjectZodSchema = makeSchema();
